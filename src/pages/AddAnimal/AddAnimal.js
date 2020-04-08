import React, { useContext, useState } from 'react';
import { AuthContext } from "../../App";
import {
    Button,
    Form,
    Col
} from 'react-bootstrap';
import * as firebase from "firebase";
import AnimalForm from "../animal/AnimalForm";
import { addAnimalAPI, uploadAnimal } from "../../utils/API";
import { alertSucess, alertNoLogin } from '../../utils/Components';

function AddAnimal() {
    const Auth = useContext(AuthContext);
    const user = Auth.loggedIn.user;
    const [animal, setAnimal] = useState({});
    const [pictures, setPictures] = useState([]);
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    }

    const handleSubmit = (animalParam) => {
        addAnimalAPI(animalParam)
            .then(res => {
                setAnimal(res);
                nextStep();
            }).catch(err => console.log(err));
    }

    const uploadPictures = async (e) => {
        e.preventDefault();
        for (var i = 0; i < pictures.length; i++) {
            const file = pictures[i];

            const url = animal._id.concat("_", i);
            await uploadPicturesFirebase(file, url);
            await retrievePicture(url);
            await updateUser();
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
                nextStep();
            }).catch(err => console.log(err));
    }

    const updateInput = (e) => {
        if (e.target.type === "file") {
            const fileList = e.target.files;
            setPictures(fileList);
        }
    }

    const uploadPicturesComponent = () => {
        return (
            <div className="container_div">
                <Form onSubmit={uploadPictures}>
                    <Form.Group onChange={updateInput} as={Col} controlId="formGridPicture">
                        <Form.Label>Pictures</Form.Label>
                        <Form.Control multiple="multiple" required name="picture" type="file">
                        </Form.Control>
                        <Form.Text id="picturesHelp" class="text-muted">You can add multilple pictures.</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Finish</Button>
                </Form>
            </div>
        );
    }

    if (Auth.loggedIn.user != null) {

        switch (step) {
            case 0:
                var animalOut = {};
                if (user != null) {
                    animalOut = {
                        owner: user._id,
                        city: user.city,
                        province: user.province,
                        region: user.region
                    };
                }
                return (
                    <div className="container_div">
                        <div class="centered">
                            <h1 className="title"><i className="fas fa-plus-circle"></i> Add Animal</h1>
                        </div>
                        <AnimalForm animal={animalOut} handleSubmit={handleSubmit} action="add" />
                    </div>
                );
            case 1:
                return (uploadPicturesComponent());
            case 2:
                return (
                    alertSucess("submitted", "animal")
                );
            default:
        }

    } else {
        return (
            alertNoLogin());

    }
}
export default AddAnimal;
