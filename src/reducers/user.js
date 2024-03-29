import {
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS,
    EDIT_USER_ERROR,
    EDIT_USER_SUCCESS,
    FETCH_ERROR_USERS_ANIMALS,
    FETCH_REQUEST_USERS_ANIMALS,
    FETCH_SUCCESS_USER,
    FETCH_SUCCESS_USERS_ANIMALS,
    FETCH_USER_ERROR,
    REQUEST_USER,
    RESET_USER, UPLOAD_PHOTO_USER_ERROR,
    UPLOAD_PHOTO_USER_SUCCESS
} from '../actions/actionTypes'
import { status } from '../constants'

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
                user: {
                    ...action.payload,
                    inAdoption: action.payload.animals.filter(animal => animal.status === status.IN_ADOPTION),
                    reserved: action.payload.animals.filter(animal => animal.status === status.RESERVED),
                    adopted: action.payload.animals.filter(animal => animal.status === status.ADOPTED)
                },
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
                user: action.user,
                edit: {
                    error: false,
                    errorMsg: '',
                    success: true
                },
            }
        case UPLOAD_PHOTO_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    picture: `https://firebasestorage.googleapis.com/v0/b/adoptdontbuy-react.appspot.com/o/pictures%2F${state.user._id}?alt=media`
                },
                isLoading: false,
                error: false,
                errorMsg: ''
            }
        case UPLOAD_PHOTO_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMsg: action.error,
                success: false
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
