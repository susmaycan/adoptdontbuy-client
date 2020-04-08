import {
    addAnimalAPI
} from '../../api/animals'
import {
    ADD_REQUEST_ANIMAL,
    ADD_SUCCESS_ANIMAL,
    ADD_ERROR_ANIMAL
} from '../actionTypes'

export default function addAnimal(animal) {
    return (dispatch) => {
        console.log("Add animal ", animal)
        dispatch(addAnimalRequest());
        return addAnimalAPI(animal)
            .then(animal => {
                dispatch(addAnimalSuccess(animal))
            })
            .catch(error => {
                console.log("There was an error adding an animal. Error: ", error.message)
                dispatch(addAnimalError())
            })
    }
}

function addAnimalRequest() {
    return {
        type: ADD_REQUEST_ANIMAL
    }
}

function addAnimalSuccess(payload) {
    return {
        type: ADD_SUCCESS_ANIMAL,
        payload
    }
}

function addAnimalError() {
    return {
        type: ADD_ERROR_ANIMAL
    }
}

