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
    FETCH_ANIMAL_ERROR,
    ADD_ANIMAL_SUCCESS,
    ADD_ANIMAL_ERROR,
    DELETE_ANIMAL_SUCCESS,
    DELETE_ANIMAL_ERROR,
    EDIT_ANIMAL_SUCCESS,
    EDIT_ANIMAL_ERROR,
    RESET_ANIMAL
} from './actionTypes'
import firebaseActions from "../Firebase/Firebase";
import uuid from 'uuid/v4'

export function fetchAnimal(animalId) {
    return (dispatch) => {
        dispatch(animalRequest())
        return getAnimal(animalId)
            .then(animal => {
                dispatch(fetchAnimalSuccess(animal))
            })
            .catch(error => {
                dispatch(fetchAnimalError(error.message))
            })
    }
}


export function addAnimal(animal) {
    return (dispatch) => {
        dispatch(animalRequest())
        let picturesURL = []
        let files = animal.picture
        const promises = []
        Object.keys(files).map(key => {
            let file = files[key]
            const idPicture = uuid()
            const ref = 'animal/' + idPicture
            const uploadPhoto =
                firebaseActions.postPicture(file, ref)
                    .then(() => {
                        console.log("File uploaded")
                        picturesURL.push('https://firebasestorage.googleapis.com/v0/b/adoptdontbuy-react.appspot.com/o/animal%2F' + idPicture + '?alt=media')
                        animal = {
                            ...animal,
                            picture: picturesURL
                        }
                    })
                    .catch(error => addAnimalError(error.message))
            promises.push(uploadPhoto)
        })
        return Promise.all(promises)
            .then(() => {
                return addAnimalAPI(animal)
                    .then(animal => {
                        dispatch(addAnimalSuccess(animal))
                    })
                    .catch(error => {
                        console.log("There was an error adding an animal on DB. Error: ", error.message)
                        dispatch(addAnimalError(error.message))
                    })
            })
            .catch(error => {
                console.log("There was an error uploading animal photos. Error: ", error.message)
                dispatch(addAnimalError(error.message))
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
                dispatch(editAnimalError(error.message))
            })
    }
}

export function addPictures(animal, files) {
    return (dispatch) => {
        dispatch(animalRequest())
        const promises = []
        Object.keys(files).map(key => {
            let file = files[key]
            const idPicture = uuid()
            const ref = 'animal/' + idPicture
            const uploadPhoto =
                firebaseActions.postPicture(file, ref)
                    .then(() => {
                        console.log("File uploaded")
                        animal.picture.push('https://firebasestorage.googleapis.com/v0/b/adoptdontbuy-react.appspot.com/o/animal%2F' + idPicture + '?alt=media')
                    })
            promises.push(uploadPhoto)
        })
        Promise.all(promises)
            .then(() => {
                return updateAnimal(animal)
                    .then(animal => {
                        dispatch(editAnimalSuccess(animal))
                    })
                    .catch(error => {
                        console.log("There was an error editing the animal on DB. Error: ", error.message)
                        dispatch(animalError(error.message))
                    })
            })
    }
}

export function deletePicture(animal, url) {
    return (dispatch) => {
        dispatch(animalRequest())
        return firebaseActions.deletePicture(url)
            .then(() => {
                const index = animal.picture.indexOf(url);
                if (index > -1) {
                    animal.picture.splice(index, 1);
                }
                return updateAnimal(animal)
                    .then(animal => {
                        dispatch(editAnimalSuccess(animal))
                    })
                    .catch(error => {
                        console.log("There was an error uploading the animal on DB. Error: ", error.message)
                        dispatch(animalError(error.message))
                    })
            })
            .catch(error => {
                console.log("There was an error deleting the picture from Firebase. Error: ", error.message)
                dispatch(animalError(error.message))
            })
    }
}

export function deleteAnimal(animalId) {
    return (dispatch) => {
        dispatch(animalRequest())
        return removeAnimal(animalId)
            .then(() => {
                dispatch(deleteAnimalSuccess())
            })
            .catch(error => {
                dispatch(deleteAnimal(error.message))
            })
    }
}

export function resetState() {
    return (dispatch) => {
        dispatch(reset())
    }
}

function reset() {
    return {
        type: RESET_ANIMAL
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

function addAnimalError(error) {
    return {
        type: ADD_ANIMAL_ERROR,
        error
    }
}

function editAnimalError(error) {
    return {
        type: EDIT_ANIMAL_ERROR,
        error
    }
}

function deleteAnimalError(error) {
    return {
        type: DELETE_ANIMAL_ERROR,
        error
    }
}

function fetchAnimalError(error) {
    return {
        type: FETCH_ANIMAL_ERROR,
        error
    }
}

