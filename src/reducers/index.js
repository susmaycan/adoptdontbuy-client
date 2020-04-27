import { combineReducers } from 'redux';
import animalListReducer from './animalList'
import loginReducer from './login'
import animalReducer from './animal'
import userReducer from './user'
import { i18nReducer } from 'react-redux-i18n'

export default combineReducers({
    animalListReducer,
    loginReducer,
    animalReducer,
    userReducer,
    i18n: i18nReducer
})

