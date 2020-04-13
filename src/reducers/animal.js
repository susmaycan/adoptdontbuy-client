import {
    ERROR_ANIMAL,
    REQUEST_ANIMAL,
    FETCH_ANIMAL_SUCCESS,
    ADD_ANIMAL_SUCCESS,
    DELETE_ANIMAL_SUCCESS,
    EDIT_ANIMAL_SUCCESS
} from '../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
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
        case ADD_ANIMAL_SUCCESS:
            return {...state, isLoading: false, animal: action.payload}
        case EDIT_ANIMAL_SUCCESS:
            return {...state, isLoading: false, error: false}
        case DELETE_ANIMAL_SUCCESS:
            return {...state, isLoading: false, error: false}
        default:
            return state;
    }
};

export default reducer;
