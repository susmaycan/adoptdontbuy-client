import {
    FILTER_LIST,
    FILTER_LIST_SUCCESS,
    FILTER_LIST_ERROR
} from '../../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    animalList: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILTER_LIST:
            return {...state, isLoading: true}
        case FILTER_LIST_SUCCESS:
            return {...state, isLoading: false, animalList: action.payload}
        case FILTER_LIST_ERROR:
            return {...state, isLoading: false, error:true}
        default:
            return state
    }
};

export default reducer
