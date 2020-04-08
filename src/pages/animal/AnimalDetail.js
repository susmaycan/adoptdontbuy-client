import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../App";
import {
    Table,
    Row,
    Spinner,
    Alert,
    Col,
    ProgressBar,
    Carousel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import { getAnimal, deleteAnimalAPI } from "../../utils/API";
import { renderContactMessage } from "../../utils/Contact";
import { ccaa, provinces } from "../../constants";
import { renderBadgeAnimalCharacteristics, renderAge, renderGender } from "../../utils/Components";

function AnimalDetail(e) {

    const [animal, setAnimal] = useState(null);
    const animalId = e.match.params.animalId;
    const [profilePictures, setProfilePictures] = useState([]);

    useEffect(() => {
        var pictureResult = [];
        const retrievePicture = async (pictures) => {
            for (var i = 0; i < pictures.length; i++) {
                var pic = pictures[i];
                await firebase
                    .storage()
                    .ref("animal")
                    .child(pic)
                    .getDownloadURL()
                    .then(url => {
                        pictureResult.push(url);
                    })
                    .catch(err => console.log("Error when retrieving the picture from firebase", err.message));
            }
            setProfilePictures(pictureResult);
        }

        getAnimal(animalId)
            .then(res => {
                setAnimal(res);
                retrievePicture(res.picture);

            })
            .catch(err => console.log(err));

    }, [animalId]);

    const [deleted, setDeleted] = useState(false);


    const deleteAnimal = () => {
        deleteAnimalAPI(animalId)
            .then(res => {
                if (res.status !== 200) {
                    throw Error(res.body.message);
                } else {
                    setDeleted(true);
                }
            }).catch(err => console.log(err));
    }

    const Auth = useContext(AuthContext);
    if (deleted === false) {
        if (animal == null) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        } else {
            const province = provinces.filter((prov) => {
                return prov.id === animal.province
            });
            const region = ccaa.filter((region) => {
                return region.autonomia_id === animal.region
            });

            return (
                <div className="container_div">
                    <div className="centered">

                        <h1 className="title">{animal.name}</h1>
                        {/* {renderBadgeStatus(animal.status)}                            */}

                    </div>
                    <Row>
                        <Col>
                            <div className="info">
                                <h2 className="subtitle" >Animal information</h2>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td className="subtitle_font">Specie</td>
                                            <td className="cap">{animal.specie}</td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Breed</td>
                                            <td>{animal.breed}</td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Size</td>
                                            <td className="cap">{animal.size}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Age</td>
                                            <td>{renderAge(animal.yearBorn)}</td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Gender</td>
                                            <td className="cap">{renderGender(animal.gender)}</td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Location</td>
                                            <td>{animal.city}, {province[0].nm}, {region[0].nombre}, {animal.country}</td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Owner</td>
                                            <td><Link
                                                to={{
                                                    pathname: `/user/${animal.owner._id}`
                                                }}>
                                                <strong>{animal.owner.username}</strong>
                                            </Link></td>
                                        </tr>

                                    </tbody>
                                </Table>
                                <br />
                                <h3 className="subtitle" >Aditional data</h3>
                                <Table responsive>
                                    <tbody>
                                        <tr>
                                            <td className="subtitle_font">Social level</td>
                                            <td><ProgressBar variant="warning" now={animal.socialLevel * 100 / 5} /></td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Energy level</td>
                                            <td><ProgressBar variant="warning" now={animal.energyLevel * 100 / 5} /> </td>
                                        </tr>
                                        <tr>
                                            <td className="subtitle_font">Trauma level</td>
                                            <td><ProgressBar variant="warning" now={animal.traumaLevel * 100 / 5} /></td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Row>
                                    {renderBadgeAnimalCharacteristics("Castrated", animal.castrated)}
                                    {renderBadgeAnimalCharacteristics("Vaccinated", animal.vaccinated)}
                                    {renderBadgeAnimalCharacteristics("Along with dogs", animal.alongWithDogs)}
                                    {renderBadgeAnimalCharacteristics("Along with cats", animal.alongWithCats)}
                                    {renderBadgeAnimalCharacteristics("Along with kids", animal.alongWithKids)}
                                </Row>
                            </div>
                        </Col>
                        <Col className="centered">

                            <div className="animal_pic_div">
                                {profilePictures.length === 0 ?
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> :
                                    profilePictures.length === 1 ?
                                        <img className="animal_picture_detail" alt={"Picture of " + animal.name} src={profilePictures[0]} />
                                        :
                                        <Carousel>
                                            {profilePictures.map((pic) => {
                                                return (
                                                    <Carousel.Item key={pic}>
                                                        <img
                                                            className="animal_picture_detail"
                                                            src={pic}
                                                            alt={"Picture of " + animal.name}
                                                        />
                                                    </Carousel.Item>
                                                );
                                            })}
                                        </Carousel>
                                }
                            </div>


                            {
                                Auth.loggedIn.user != null && Auth.loggedIn.user._id === animal.owner._id ?
                                    <Link className="button" to={{ pathname: `/editPictures/${animal._id}` }}>
                                        <i className="fas fa-edit"></i> Edit pictures
        </Link>
                                    :
                                    ""
                            }

                        </Col>
                    </Row>




                    <div className="centered">

                        {animal.about !== "unknown" ?
                            <div className="about">
                                <h3 className="subtitle">Story</h3>
                                <hr></hr>
                                <p>{animal.about}</p>
                            </div>
                            :
                            ""}

                        {
                            Auth.loggedIn.user != null && Auth.loggedIn.user._id === animal.owner._id ?
                                <>
                                    <Link className="button" to={{ pathname: `/updateAnimal/${animal._id}` }}>
                                        <i className="fas fa-edit"></i> Edit details
                                    </Link>
                                    <button className="button delete" onClick={deleteAnimal}>
                                        <i className="fas fa-trash-alt"></i> Delete</button></>
                                :
                                renderContactMessage(animal.owner.email, animal.name)
                                // <button className="button"><i className="fas fa-envelope"></i> Request adoption</button>
                        }
                    </div>
                </div >
            );
        }
    } else {
        return (
            <>
                <Alert variant="success">
                    Your animal was sucessfully deleted! Go <Link to="/">home</Link>.
                    </Alert>
            </>
        );
    }

}
export default AnimalDetail;
