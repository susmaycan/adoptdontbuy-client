import {filterAnimal, getAnimals} from '../api/animals'

import {
    FETCH_ERROR_ANIMAL_LIST,
    FETCH_REQUEST_ANIMAL_LIST,
    FETCH_SUCCESS_ANIMAL_LIST,
    FILTER_LIST_SUCCESS,
} from './actionTypes'

export function fetchAnimals() {
    return (dispatch) => {
        dispatch(fetchAnimalListRequest())
        return getAnimals()
            .then(response => {
                dispatch(fetchAnimalListSuccess(response))
            })
            .catch(err => {
                console.log('Error when retrieving retrieving the animals ', err.message)
                dispatch(fetchAnimalListError())
            })
    }
}

export function filter(query) {
    return (dispatch) => {
        dispatch(fetchAnimalListRequest())
        return filterAnimal(query)
            .then(response => {
                dispatch(fetchFilterListSuccess(response))
            })
            .catch(err => {
                console.log('Error when retrieving retrieving the animals ', err.message)
                dispatch(fetchAnimalListError())
            })
    }
}

function fetchAnimalListRequest() {
    return {
        type: FETCH_REQUEST_ANIMAL_LIST
    }
}

function fetchAnimalListSuccess(payload) {
    return {
        type: FETCH_SUCCESS_ANIMAL_LIST,
        payload
    }
}

function fetchAnimalListError() {
    return {
        type: FETCH_ERROR_ANIMAL_LIST
    }
}

function fetchFilterListSuccess(payload) {
    return {
        type: FILTER_LIST_SUCCESS,
        payload
    }
}

