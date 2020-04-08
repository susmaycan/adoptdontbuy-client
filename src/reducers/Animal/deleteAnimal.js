import {
    DELETE_ANIMAL,
    DELETE_ANIMAL_ERROR,
    DELETE_ANIMAL_SUCCESS
} from '../../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    success: true
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DELETE_ANIMAL:
            return {...state, isLoading: true}
        case DELETE_ANIMAL_SUCCESS:
            return {...state, isLoading: false, success: true}
        case DELETE_ANIMAL_ERROR:
            return {...state, isLoading: false, success: false}
        default:
            return state;
    }
};

export default reducer;
