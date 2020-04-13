import { combineReducers } from 'redux';
import animalListReducer from './animalList'
import loginReducer from './login'
import animalReducer from './animal'
import userReducer from './user'

export default combineReducers({
    animalListReducer,
    loginReducer,
    animalReducer,
    userReducer
});
