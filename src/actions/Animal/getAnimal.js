import {
    getAnimal
} from '../../api/animals'
import {
    FETCH_ERROR_ANIMAL,
    FETCH_REQUEST_ANIMAL,
    FETCH_SUCCESS_ANIMAL
} from '../actionTypes'

export default function fetchAnimal(animalId) {
    return (dispatch) => {
        dispatch(fetchAnimalRequest());
        return getAnimal(animalId)
            .then(animal => {
                dispatch(fetchAnimalSuccess(animal))
            })
            .catch(error => {
                dispatch(fetchAnimalError())
            })
    }
}

function fetchAnimalRequest() {
    return {
        type: FETCH_REQUEST_ANIMAL
    }
}

function fetchAnimalSuccess(payload) {
    return {
        type: FETCH_SUCCESS_ANIMAL,
        payload
    }
}

function fetchAnimalError() {
    return {
        type: FETCH_ERROR_ANIMAL
    }
}

