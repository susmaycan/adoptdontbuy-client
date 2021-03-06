import firebaseActions from '../Firebase/Firebase'
import {addUser, getUser} from '../api/users'

import {
    FETCH_ERROR_LOGIN,
    FETCH_REQUEST_LOGIN,
    FETCH_SUCCESS_LOGIN,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    RECOVER_ERROR,
    RECOVER_SUCCESS,
    REFRESH_USER_SUCCESS,
    RESET,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
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


export function refreshUser(userId) {
    return (dispatch) => {
        dispatch(loginUserRequest())
        getUser(userId)
            .then(user => {
                dispatch(refreshUserSuccess(user))
            })
            .catch(error => {
                console.log('Error when retrieving the user from db')
                dispatch(refreshUserError(error.message))
            })
    }
}

export function recoverPassword(email) {
    return (dispatch) => {
        dispatch(loginUserRequest())
        return firebaseActions.sendPasswordResetEmail(email)
            .then(
                dispatch(recoverSuccess())
            )
            .catch(error => {
                dispatch(recoverError(error.message))
            })
    }
}


export function resetState() {
    return (dispatch) => {
        dispatch(reset())
    }
}

export function signUpUser(email, password, username) {

    return (dispatch) => {
        dispatch(loginUserRequest())
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
                            dispatch(signUpError(error.message))
                        })
                }
            })
            .catch(error => {
                console.log('Error when creating the user in Firebase ', error.message)
                dispatch(signUpError(error.message))
            })
    }
}

export function logout() {
    return (dispatch) => {
        return firebaseActions.logout()
            .then(
                dispatch(logoutUserSuccess())
            )
            .catch(() => {
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

function reset() {
    return {
        type: RESET
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

function refreshUserSuccess(payload) {
    return {
        type: REFRESH_USER_SUCCESS,
        payload
    }
}

function refreshUserError(error) {
    return {
        type: REFRESH_USER_SUCCESS,
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

function signUpError(error) {
    return {
        type: SIGNUP_ERROR,
        error
    }
}

function recoverSuccess(payload) {
    return {
        type: RECOVER_SUCCESS,
        payload
    }
}

function recoverError(error) {
    return {
        type: RECOVER_ERROR,
        error
    }
}
