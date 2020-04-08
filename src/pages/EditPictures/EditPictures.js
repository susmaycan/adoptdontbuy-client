import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../App";
import {
    Row,
    Spinner,
    Col,
    Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase";
import { getAnimal, uploadAnimal } from "../../utils/API";
import { alertNoLogin, alertSucess, alertCantAccess } from '../../utils/Components';

function EditPictures(e) {

    const [animal, setAnimal] = useState(null);
    const animalId = e.animalId;
    const [profilePictures, setProfilePictures] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [picturesToUpload, setPicturesToUpload] = useState([]);
    const [picChanged, setPicChanged] = useState(false);
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
                        var objt = {
                            "url": url,
                            "name": pic
                        };
                        pictureResult.push(objt);

                    })
                    .catch(err => console.log("Error when retrieving the picture from firebase", err.message));
            }
            setProfilePictures(pictureResult);
            setPicChanged(false);
        }

        getAnimal(animalId)
            .then(res => {
                setAnimal(res);
                retrievePicture(res.picture);

            })
            .catch(err => console.log(err));

    }, [animalId, picChanged]);

    const uploadPictures = async (e) => {
        e.preventDefault();
        for (var i = 0; i < picturesToUpload.length; i++) {
            var found = false;
            for (var index = 0; index < 11 && !found; index++) {
                const file = picturesToUpload[i];

                const url = animal._id.concat("_", index);
                if (!animal.picture.includes(url)) {
                    await uploadPicturesFirebase(file, url);
                    await retrievePicture(url);
                    await updateUser();
                    found = true;
                }
            }
        }
    }

    const updateInput = (e) => {
        if (e.target.type === "file") {
            const fileList = e.target.files;
            setPicturesToUpload(fileList);
        }
    }

    const uploadPicturesFirebase = async (file, url) => {
        const storageRef = firebase.storage().ref(`animal/${url}`);
        const task = storageRef.put(file);
        await task
            .then(res => {
                console.log("Pictures uploaded");

            })
            .catch(err => {
                console.log("Error uploading the picture: ", err.message)
            });
    }

    const deletePictureFirebase = async (url) => {
        const storageRef = firebase.storage().ref(`animal/${url}`);
        const task = storageRef.delete();
        await task
            .then(res => {
                console.log("Pictures deleted");
            })
            .catch(err => {
                console.log("Error deleting the picture: ", err.message)
            });
    }

    async function deletePicture(id) {
        await deletePictureFirebase(id);
        await removePicture(id);
        await updateUser();

    }

    const removePicture = async (imageURL) => {
        var pictures = animal.picture;
        pictures.pop(imageURL);
        setAnimal({
            ...animal,
            picture: pictures
        });
    }

    const retrievePicture = async (imageURL) => {
        var pictures = animal.picture;
        pictures.push(imageURL);
        setAnimal({
            ...animal,
            picture: pictures
        });
    }

    const updateUser = async () => {
        uploadAnimal(animal)
            .then(res => {
                setPicChanged(true);
            }).catch(err => console.log(err));
    }

    const Auth = useContext(AuthContext);

    if (Auth.loggedIn.user != null) {
        if (updated === false) {
            if (animal === null) {
                return (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                );

            } else if (Auth.loggedIn.user._id === animal.owner._id) {
                return (
                    <div className="container_div">
                        <div class="centered">
                            <h1 className="title"><i className="fas fa-edit"></i> Edit pictures of {animal.name}</h1>
                            <p>You can add or delete pictures.</p>
                        </div>
                        <Form onSubmit={uploadPictures}>
                            <Form.Group onChange={updateInput} as={Col} controlId="formGridPicture">
                                <Form.Label className="subtitle">Pictures</Form.Label>
                                <Form.Control multiple="multiple" required name="picture" type="file">
                                </Form.Control>
                                <Form.Text id="picturesHelp" class="text-muted">You can add multilple pictures.</Form.Text>
                            </Form.Group>
                            <button className="button" type="submit"><i className="fas fa-plus-circle"></i> Add pictures</button>
                        </Form>
                        <Row>
                            {profilePictures.length === 0 ?
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner> :

                                profilePictures.map((pic) => {
                                    return (
                                        <div key={pic.name} className="animal_container">
                                            <Col>
                                                <Row>
                                                    <img
                                                        className="home_image"
                                                        src={pic.url}
                                                        alt={"Picture of " + animal.name}
                                                    />
                                                </Row>
                                                <Row>
                                                    <button onClick={() => deletePicture(pic.name)} className="button delete"><i className="fas fa-trash-alt"></i></button>
                                                </Row>
                                            </Col>
                                        </div>
                                    );
                                })

                            }
                        </Row>
                        <Link className="button" to={{ pathname: `/animal/${animal._id}` }}>
                            Finish
                        </Link>
                    </div>);
            } else {
                return (
                    alertCantAccess()
                );


            }
        } else {
            return (
                alertSucess("deleted", "animal")
            );
        }
    } else {
        return (
            alertNoLogin()
        );
    }
}
export default EditPictures;
