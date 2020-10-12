import {
    ADD_ANIMAL_ERROR,
    ADD_ANIMAL_SUCCESS,
    DELETE_ANIMAL_ERROR,
    DELETE_ANIMAL_SUCCESS,
    EDIT_ANIMAL_ERROR,
    EDIT_ANIMAL_SUCCESS,
    ERROR_ANIMAL,
    FETCH_ANIMAL_ERROR,
    FETCH_ANIMAL_SUCCESS,
    REQUEST_ANIMAL,
    RESET_ANIMAL
} from '../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    add: {
        error: false,
        errorMsg: '',
        success: false
    },
    update: {
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
    error: false,
    errorMsg: '',
    animal: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_ANIMAL:
            return {...state, isLoading: true}
        case ERROR_ANIMAL:
            return {...state, isLoading: false, error: true, errorMsg: action.error}
        case FETCH_ANIMAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                animal: action.payload,
                fetch: {success: true, error: false, errorMsg: ''}
            }
        case FETCH_ANIMAL_ERROR:
            return {
                ...state,
                isLoading: false,
                animal: {},
                fetch: {success: false, error: true, errorMsg: action.error}
            }
        case ADD_ANIMAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                animal: action.payload,
                add: {success: true, error: false, errorMsg: ''}
            }
        case ADD_ANIMAL_ERROR:
            return {
                ...state,
                isLoading: false,
                animal: action.payload,
                add: {success: false, error: true, errorMsg: action.error}
            }
        case EDIT_ANIMAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                animal: action.animal,
                update: {success: true, error: false, errorMsg: ''}
            }
        case EDIT_ANIMAL_ERROR:
            return {
                ...state,
                isLoading: false,
                update: {success: false, error: true, errorMsg: action.error}
            }
        case DELETE_ANIMAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                delete: {success: true, error: false, errorMsg: ''}
            }
        case DELETE_ANIMAL_ERROR:
            return {
                ...state,
                isLoading: false,
                delete: {success: false, error: true, errorMsg: action.error}
            }
        case RESET_ANIMAL:
            return {
                ...state,
                isLoading: false,
                add: {success: false, errorMsg: '', error: false},
                update: {success: false, errorMsg: '', error: false},
                delete: {success: false, errorMsg: '', error: false},
                fetch: {success: false, errorMsg: '', error: false},
            }
        default:
            return state;
    }
}

export default reducer;
