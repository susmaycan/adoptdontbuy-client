import firebaseActions from '../Firebase/Firebase'
import {
    getUser,
    addUser
} from '../api/users'

import {
    FETCH_REQUEST_LOGIN,
    FETCH_ERROR_LOGIN,
    FETCH_SUCCESS_LOGIN,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from './actionTypes'

export function loginUser(email, password) {
    return (dispatch) => {
        dispatch(loginUserRequest())
        return firebaseActions.login(email, password)
            .then(response => {
                getUser(response.user.uid)
                    .then(user => {
                        dispatch(loginUserSuccess(user))
                    })
                    .catch(error => {
                        console.log('Error when retrieving the user from db')
                        dispatch(loginUserError(error.message))
                    })
            })
            .catch(error => {
                console.log('Error when login the user to firebase')
                dispatch(loginUserError(error.message))
            })
    }
}

export function signUpUser(values) {
    const email = values.email
    const password = values.password
    const username = values.username

    return (dispatch) => {
        return firebaseActions.signUp(email, password)
            .then(response => {
                if (response.user) {
                    const user = response.user;
                    const user_obj = {"_id": user.uid, "email": email, "username": username};
                    addUser(user_obj)
                        .then(user => {
                            dispatch(signUpSuccess(user))
                        })
                        .catch(error => {
                            console.log('Error when creating the user in db')
                            dispatch(signUpError())
                        })
                }
            })
            .catch(error => {
                console.log('Error when creating the user in Firebase ', error.message)
                dispatch(signUpError())
            })
    }
}

export function logout() {
    return (dispatch) => {
        return firebaseActions.logout()
            .then(response => {
                dispatch(logoutUserSuccess())
            })
            .catch(error => {
                console.log('Error in logout')
                dispatch(logoutUserError())
            })
    }
}

function loginUserRequest() {
    return {
        type: FETCH_REQUEST_LOGIN
    }
}

function loginUserSuccess(payload) {
    return {
        type: FETCH_SUCCESS_LOGIN,
        payload
    }
}

function loginUserError(error) {
    return {
        type: FETCH_ERROR_LOGIN,
        error
    }
}

function logoutUserSuccess(payload) {
    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}

function logoutUserError() {
    return {
        type: LOGOUT_ERROR
    }
}

function signUpSuccess(payload) {
    return {
        type: SIGNUP_SUCCESS,
        payload
    }
}

function signUpError() {
    return {
        type: SIGNUP_ERROR
    }
}
