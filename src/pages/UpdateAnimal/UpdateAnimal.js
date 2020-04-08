import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../App";
import AnimalForm from "../animal/AnimalForm";
import { getAnimal, uploadAnimal } from "../../utils/API";
import { alertCantAccess, alertSucess } from '../../utils/Components';

function UpdateAnimal(e) {
    const Auth = useContext(AuthContext);
    const animalId = e.animalId;

    const [animal, setAnimal] = useState({});

    useEffect(() => {
        getAnimal(animalId)
            .then(res => {
                setAnimal(res);
            })
            .catch(err => console.log("Error when retrieving animal: ", err));

    }, [animalId]);


    const [submit, setSubmit] = useState(false);

    const handleSubmit = (animalParam) => {
        uploadAnimal(animalParam)
            .then(res => {
                setSubmit(true);
            }).catch(err => console.log("Error when updating animal: ", err));
    }


    if (Auth.loggedIn.user != null && animal.owner !== undefined && Auth.loggedIn.user._id === animal.owner._id) {
        if (submit === false) {
            return (
                <div className="container_div">
                    <div class="centered">
                        <h1 className="title"><i className="fas fa-edit"></i> Update Animal</h1>
                    </div>
                    <AnimalForm animal={animal} handleSubmit={handleSubmit} action="edit"/>
                </div>
            );
        } else {
            return (
                alertSucess("updated", "animal")
            );
        }

    } else {
        return (
            alertCantAccess()
        );

    }
}
export default UpdateAnimal;
