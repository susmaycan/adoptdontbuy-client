import {
    FETCH_ERROR_ANIMAL,
    FETCH_REQUEST_ANIMAL,
    FETCH_SUCCESS_ANIMAL,
    ADD_REQUEST_ANIMAL,
    ADD_SUCCESS_ANIMAL,
    ADD_ERROR_ANIMAL
} from '../../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    animal: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REQUEST_ANIMAL:
        case ADD_REQUEST_ANIMAL:
            return {...state, isLoading: true}
        case FETCH_SUCCESS_ANIMAL:
            return {...state, isLoading: false, animal: action.payload}
        case FETCH_ERROR_ANIMAL:
        case ADD_ERROR_ANIMAL:
            return {...state, isLoading: false, error: true}
        case ADD_SUCCESS_ANIMAL:
            return {...state, isLoading: false, animal: action.payload}
        default:
            return state;
    }
};

export default reducer;
