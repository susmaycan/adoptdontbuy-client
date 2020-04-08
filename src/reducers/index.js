import { combineReducers } from 'redux';
import animalListReducer from './Animal/animalList'
import loginReducer from './login'
import animalReducer from './Animal/animal'
import filterReducer from './Animal/filterList'
import userReducer from './user'

export default combineReducers({
    animalListReducer,
    loginReducer,
    animalReducer,
    filterReducer,
    userReducer
});
