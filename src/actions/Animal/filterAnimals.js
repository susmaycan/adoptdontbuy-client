import {filterAnimal} from '../../api/animals'

import {
    FILTER_LIST,
    FILTER_LIST_SUCCESS,
    FILTER_LIST_ERROR
} from '../actionTypes'

export default function filter(query) {
    return (dispatch) => {
        dispatch(fetchFilterListRequest());
        return filterAnimal(query)
            .then(response => {
                dispatch(fetchFilterListSuccess(response))
            })
            .catch(err => {
                console.log('Error when retrieving retrieving the animals ', err.message)
                dispatch(fetchFilterListError())
            })
    }
}

function fetchFilterListRequest() {
    return {
        type: FILTER_LIST
    }
}

function fetchFilterListSuccess(payload) {
    return {
        type: FILTER_LIST_SUCCESS,
        payload
    }
}

function fetchFilterListError() {
    return {
        type: FILTER_LIST_ERROR
    }
}
