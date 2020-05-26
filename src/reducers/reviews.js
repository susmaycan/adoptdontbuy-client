import {
    REVIEW_REQUEST,
    POST_REVIEW_ERROR,
    POST_REVIEW_SUCCESS,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_ERROR,
    RESET_REVIEW
} from '../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    post: {
        error: false,
        errorMsg: false,
        success: false
    },
    delete: {
        error: false,
        errorMsg: false,
        success: false
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REVIEW_REQUEST:
            return {...state, isLoading: true}
        case POST_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                post: {success: true, error: false, errorMsg: ''}
            }
        case POST_REVIEW_ERROR:
            return {
                ...state,
                isLoading: false,
                post: {success: false, error: true, errorMsg: action.error}
            }
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                delete: {success: true, error: false, errorMsg: ''}
            }
        case DELETE_REVIEW_ERROR:
            return {
                ...state,
                isLoading: false,
                delete: {success: false, error: true, errorMsg: action.error}
            }
        case RESET_REVIEW:
            return INITIAL_STATE
        default:
            return state
    }
}

export default reducer
