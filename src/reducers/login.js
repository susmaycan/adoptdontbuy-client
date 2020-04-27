import {
    FETCH_REQUEST_LOGIN,
    FETCH_ERROR_LOGIN,
    FETCH_SUCCESS_LOGIN,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    RECOVER_SUCCESS,
    RECOVER_ERROR
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
        case RECOVER_ERROR:
        case FETCH_ERROR_LOGIN:
            return {...state, isLoading: false, error: true, errorMsg: action.error}
        case RECOVER_SUCCESS:
        case LOGOUT_SUCCESS:
            return {...state, user: {}, isLoggedIn: false, isLoading: false, error: false, errorMsg: ''}
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
