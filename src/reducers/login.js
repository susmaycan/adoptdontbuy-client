import {
    FETCH_REQUEST_LOGIN,
    FETCH_ERROR_LOGIN,
    FETCH_SUCCESS_LOGIN,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from '../actions/actionTypes'

const INITIAL_STATE = {
    user: {},
    isLoading: false,
    error: false,
    errorMsg: '',
    isLoggedIn: false,
    errorLogout: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REQUEST_LOGIN:
            return {...state, isLoading: true}
        case FETCH_SUCCESS_LOGIN:
            return {...state, isLoading: false, isLoggedIn: true, user: action.payload, error: false, errorMsg: ''}
        case FETCH_ERROR_LOGIN:
            return {...state, isLoading: false, error: true, errorMsg: action.error}
        case LOGOUT_SUCCESS:
            return {...state, user: {}, isLoggedIn: false}
        case LOGOUT_ERROR:
            return {...state, errorLogout: true}
        case SIGNUP_SUCCESS:
            return {...state, isLoggedIn: true, user: action.payload}
        case SIGNUP_ERROR:
            return {...state, error: true}
        default:
            return state
    }
}

export default reducer
