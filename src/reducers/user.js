import {
    REQUEST_USER,
    FETCH_SUCCESS_USER,
    FETCH_ERROR_USERS_ANIMALS,
    FETCH_SUCCESS_USERS_ANIMALS,
    FETCH_REQUEST_USERS_ANIMALS,
    FETCH_USER_ERROR,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    EDIT_USER_SUCCESS,
    EDIT_USER_ERROR, RESET_USER,
} from '../actions/actionTypes'

const INITIAL_STATE = {
    animalList: [],
    favourites: [],
    user: {},
    isLoading: false,
    error: false,
    errorMsg: '',
    isLoadingList: false,
    errorList: false,
    edit: {
        error: false,
        errorMsg: '',
        success: false
    },
    delete: {
        error: false,
        errorMsg: '',
        success: false
    },
    fetch: {
        error: false,
        errorMsg: '',
        success: false
    },
    list: {
        error: false,
        errorMsg: '',
        success: false
    },

}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return {...state, isLoading: true}
        case EDIT_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                edit: {
                    error: true,
                    errorMsg: action.error,
                    success: false
                }
            }
        case DELETE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                delete: {
                    error: true,
                    errorMsg: action.error,
                    success: false
                }
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                fetch: {
                    error: true,
                    errorMsg: action.error,
                    success: false
                }
            }
        case FETCH_SUCCESS_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                fetch: {
                    error: false,
                    errorMsg: '',
                    success: true
                }
            }
        case FETCH_REQUEST_USERS_ANIMALS:
            return {...state, isLoadingList: true}
        case FETCH_SUCCESS_USERS_ANIMALS:
            return {...state, isLoadingList: false, animalList: action.inAdoption, favourites: action.favourites}
        case FETCH_ERROR_USERS_ANIMALS:
            return {...state, isLoadingList: false, errorList: true}
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                delete: {
                    error: false,
                    errorMsg: '',
                    success: true
                },
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                edit: {
                    error: false,
                    errorMsg: '',
                    success: true
                },
            }
        case RESET_USER:
            return {
                ...state,
                isLoading: false,
                edit: {
                    error: false,
                    errorMsg: '',
                    success: false
                },
                fetch: {
                    error: false,
                    errorMsg: '',
                    success: false
                },
                delete: {
                    error: false,
                    errorMsg: '',
                    success: false
                }
            }
        default:
            return state
    }
}

export default reducer
