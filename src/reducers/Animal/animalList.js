import {
    FETCH_ERROR_ANIMAL_LIST,
    FETCH_REQUEST_ANIMAL_LIST,
    FETCH_SUCCESS_ANIMAL_LIST
} from '../../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    animals: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REQUEST_ANIMAL_LIST:
            return {...state, isLoading: true}
        case FETCH_SUCCESS_ANIMAL_LIST:
            return {...state, isLoading: false, animals: action.payload}
        case FETCH_ERROR_ANIMAL_LIST:
            return {...state, isLoading: false, error:true}
        default:
            return state
    }
};

export default reducer
