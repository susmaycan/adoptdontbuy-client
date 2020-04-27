import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'
import english from '../translations/en.json'
import spanish from '../translations/es.json'
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n'

const loggerMiddleware = createLogger()

const translationsObject = {
    en: english,
    es: spanish
}

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
    syncTranslationWithStore(store)
    store.dispatch(loadTranslations(translationsObject))
    store.dispatch(setLocale('es'))
    return store
}
