import {
    removeAnimal
} from '../../api/animals'
import {
    DELETE_ANIMAL,
    DELETE_ANIMAL_ERROR,
    DELETE_ANIMAL_SUCCESS
} from '../actionTypes'

export default function deleteAnimal(animalId) {
    return (dispatch) => {
        dispatch(deleteAnimalRequest());
        return removeAnimal(animalId)
            .then(response => {
                dispatch(deleteAnimalSuccess())
            })
            .catch(error => {
                dispatch(deleteAnimalError())
            })
    }
}

function deleteAnimalRequest() {
    return {
        type: DELETE_ANIMAL
    }
}

function deleteAnimalSuccess() {
    return {
        type: DELETE_ANIMAL_SUCCESS
    }
}

function deleteAnimalError() {
    return {
        type: DELETE_ANIMAL_ERROR
    }
}

