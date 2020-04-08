import React, { useState, useEffect } from 'react';
import {
    Image,
    Row,
    Col,
    Spinner
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import { ccaa, provinces } from "../constants";


function AnimalResult(e) {
    const animal = e.animal;
    const [profilePictures, setProfilePictures] = useState([]);

    useEffect(() => {
        var pictureResult = [];
        const retrievePicture = async () => {
            var pictures = animal.picture;
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
        }
        retrievePicture()
            .then(res => {
                setProfilePictures(pictureResult);
            })
            .catch(err => console.log("Error when retrieving picture ", err));
    }, [animal._id, animal.picture]);


    return (
        <div key={animal._id} className="animal_container">
            <Row>
                <Col>
                    {profilePictures.length === 0 ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner> :
                        <Image rounded className="profile_image rounded" alt={"Picture of " + animal.name} src={profilePictures[0]} />
                    }
                </Col>
                <Col>
                    <Row>
                        <h2 class="subtitle bold">{animal.name}</h2>
                        {/* {renderBadgeStatus(animal.status)}                            */}
                    </Row>
                    <p class="small_subtitle"><span class="cap">{animal.specie}</span> - {animal.gender === "F" ? <>Female <i class="fas fa-venus"></i></> : <>Male <i class="fas fa-mars"></i></>}</p>
                    <p><i class="fas fa-map-marker-alt"></i><> </>
                        {animal.city},  {provinces.filter((prov) => {
                            return prov.id === animal.province
                        })[0].nm},  {ccaa.filter((region) => {
                            return region.autonomia_id === animal.region
                        })[0].nombre}
                    </p>
                </Col>
                <Col>

                    <Link className="button"
                        to={{
                            pathname: `/animal/${animal._id}`
                        }}>
                        <i class="fas fa-info-circle"></i> More info
    </Link>
                </Col>
            </Row >

        </div>
    );
}
export default AnimalResult;
