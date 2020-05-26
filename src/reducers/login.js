import {
    FETCH_ERROR_LOGIN,
    FETCH_REQUEST_LOGIN,
    FETCH_SUCCESS_LOGIN,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    RECOVER_ERROR,
    RECOVER_SUCCESS,
    REFRESH_USER_ERROR,
    REFRESH_USER_SUCCESS,
    RESET,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from '../actions/actionTypes'

const INITIAL_STATE = {
    user: {},
    login: {
        error: false,
        errorMsg: '',
    },
    signup: {
        error: false,
        errorMsg: '',
        success: false
    },
    logout: {
        error: false,
        errorMsg: '',
        success: false
    },
    refreshUser: {
        error: false,
        errorMsg: '',
        success: false
    },
    recover: {
        error: false,
        errorMsg: '',
        success: false
    },
    isLoading: false,
    isLoggedIn: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REQUEST_LOGIN:
            return {...state, isLoading: true}

        case FETCH_SUCCESS_LOGIN:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: action.payload,
                login: {...state.login, error: false, errorMsg: '', success: true}
            }
        case REFRESH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: action.payload,
                refreshUser: {error: false, errorMsg: '', success: true}
            }
        case RECOVER_SUCCESS:
            return {...state, isLoading: false, recover: {...state.recover, error: false, errorMsg: '', success: true}}
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                user: {},
                logout: {...state.logout, error: false, errorMsg: '', success: true}
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: action.payload,
                signup: {...state.signup, error: false, errorMsg: '', success: true}
            }

        case RECOVER_ERROR:
            return {
                ...state,
                isLoading: false,
                recover: {...state.recover, error: true, errorMsg: action.error, success: false}
            }
        case FETCH_ERROR_LOGIN:
            return {
                ...state,
                isLoading: false,
                login: {...state.login, error: true, errorMsg: action.error, success: false}
            }

        case REFRESH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                refreshUser: {error: true, errorMsg: action.error, success: false}
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                isLoading: false,
                logout: {...state.logout, error: true, errorMsg: action.error, success: false}
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                isLoading: false,
                signup: {...state.signup, error: true, errorMsg: action.error, success: false}
            }
        case RESET:
            return {
                ...state,
                signup: {error: false, errorMsg: '', success: false},
                login: {error: false, errorMsg: '', success: false},
                recover: {error: false, errorMsg: '', success: false},
            }
        default:
            return state
    }
}

export default reducer
