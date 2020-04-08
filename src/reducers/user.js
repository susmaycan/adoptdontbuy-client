import {
    FETCH_REQUEST_USER,
    FETCH_ERROR_USER,
    FETCH_SUCCESS_USER,
    FETCH_ERROR_USERS_ANIMALS,
    FETCH_SUCCESS_USERS_ANIMALS,
    FETCH_REQUEST_USERS_ANIMALS,
    USER_ERROR,
    DELETE_SUCCESS, EDIT_SUCCESS
} from '../actions/actionTypes'

const INITIAL_STATE = {
    animalList: [],
    user: {},
    isLoading: false,
    error: false,
    errorMsg: '',
    isLoadingList: false,
    errorList: false,
    favourites: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REQUEST_USER:
            return {...state, isLoading: true}
        case FETCH_SUCCESS_USER:
            return {...state, isLoading: false, user: action.payload}
        case FETCH_ERROR_USER:
            return {...state, isLoading: false, error: true}
        case FETCH_REQUEST_USERS_ANIMALS:
            return {...state, isLoadingList: true}
        case FETCH_SUCCESS_USERS_ANIMALS:
            return {...state, isLoadingList: false, animalList: action.inAdoption, favourites: action.favourites}
        case FETCH_ERROR_USERS_ANIMALS:
            return {...state, isLoadingList: false, errorList: true}
        case USER_ERROR:
            return {...state, isLoading: false, error: true, errorMsg: action.error}
        case DELETE_SUCCESS:
            return {...state, isLoading: false, error: false, errorMsg: ''}
        case EDIT_SUCCESS:
            return {...state, isLoading: false, error: false, errorMsg: ''}
        default:
            return state
    }
}

export default reducer
