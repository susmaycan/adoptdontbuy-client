import {
    addAnimalAPI,
    getAnimal,
    removeAnimal,
    updateAnimal
} from '../api/animals'

import {
    ERROR_ANIMAL,
    REQUEST_ANIMAL,
    FETCH_ANIMAL_SUCCESS,
    ADD_ANIMAL_SUCCESS,
    DELETE_ANIMAL_SUCCESS,
    EDIT_ANIMAL_SUCCESS
} from './actionTypes'
import firebaseActions from "../Firebase/Firebase";
import uuid from 'uuid/v4'

export function fetchAnimal(animalId) {
    return (dispatch) => {
        dispatch(animalRequest());
        return getAnimal(animalId)
            .then(animal => {
                dispatch(fetchAnimalSuccess(animal))
            })
            .catch(error => {
                dispatch(animalError(error.message))
            })
    }
}

export function addAnimal(animal) {
    return (dispatch) => {
        console.log("Add animal ", animal)
        dispatch(animalRequest())
        const idPicture = uuid()
        console.log("Generated id ", idPicture)
        const ref = 'animal/' + idPicture

        return firebaseActions.postPicture(animal.picture, ref)
            .then(response => {
                animal = {
                    ...animal,
                    picture: 'https://firebasestorage.googleapis.com/v0/b/adoptdontbuy-react.appspot.com/o/animal%2F' + idPicture + '?alt=media'
                }
                return addAnimalAPI(animal)
                    .then(animal => {
                        dispatch(addAnimalSuccess(animal))
                    })
                    .catch(error => {
                        console.log("There was an error adding an animal on DB. Error: ", error.message)
                        dispatch(animalError(error.message))
                    })
            })
            .catch(error => {
                console.log("There was an error posting animal's picture. Error: ", error.message)
                dispatch(animalError(error.message))
            })

    }
}

export function editAnimal(animal) {
    return (dispatch) => {
        console.log("Edit animal ", animal)
        dispatch(animalRequest())
        return updateAnimal(animal)
            .then(animal => {
                dispatch(editAnimalSuccess(animal))
            })
            .catch(error => {
                console.log("There was an error editing the animal on DB. Error: ", error.message)
                dispatch(animalError(error.message))
            })
    }
}

export function deleteAnimal(animalId) {
    return (dispatch) => {
        dispatch(animalRequest())
        return removeAnimal(animalId)
            .then(response => {
                dispatch(deleteAnimalSuccess())
            })
            .catch(error => {
                dispatch(animalError(error.message))
            })
    }
}

function addAnimalSuccess(payload) {
    return {
        type: ADD_ANIMAL_SUCCESS,
        payload
    }
}

function fetchAnimalSuccess(payload) {
    return {
        type: FETCH_ANIMAL_SUCCESS,
        payload
    }
}

function deleteAnimalSuccess() {
    return {
        type: DELETE_ANIMAL_SUCCESS
    }
}

function editAnimalSuccess() {
    return {
        type: EDIT_ANIMAL_SUCCESS
    }
}

function animalRequest() {
    return {
        type: REQUEST_ANIMAL
    }
}

function animalError(error) {
    return {
        type: ERROR_ANIMAL,
        error
    }
}

