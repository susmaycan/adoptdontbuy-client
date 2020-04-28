import {
    getUser,
    animalByUser,
    deleteUserAPI,
    editUser
} from '../api/users'
import {
    REQUEST_USER,
    FETCH_SUCCESS_USER,
    FETCH_ERROR_USERS_ANIMALS,
    FETCH_SUCCESS_USERS_ANIMALS,
    FETCH_REQUEST_USERS_ANIMALS,
    USER_ERROR,
    DELETE_SUCCESS,
    EDIT_SUCCESS, UPLOAD_PHOTO_SUCCESS
} from './actionTypes'
import firebaseActions from '../Firebase/Firebase'

export function fetchUser(userId) {
    return (dispatch) => {
        dispatch(userRequest())
        return getUser(userId)
            .then(user => {
                dispatch(getUserSuccess(user))
            })
            .catch(error => {
                console.log('Error when retrieving the user with id ', userId, ' from db. Error: ', error.message)
                dispatch(userError(error.message))
            })
    }
}

export function fetchAnimalsUser(userId) {
    return (dispatch) => {
        dispatch(getUserAnimalsRequest())
        return animalByUser(userId)
            .then(response => {
                dispatch(getUserAnimalsSuccess(response.inAdoption, response.favourites))
            })
            .catch(err => {
                console.log('Error when retrieving retrieving the animals ', err.message)
                dispatch(getUserAnimalsError())
            })
    }
}

export function deleteUser(userId) {
    return (dispatch) => {
        dispatch(userRequest())
        return firebaseActions.deleteUser()
            .then(() => {
                    return deleteUserAPI(userId)
                        .then(
                            dispatch(deleteUserSuccess())
                        )
                        .catch(err => {
                            console.log('DB: Error when deleting the user with id ', userId, '. Error: ', err.message)
                            dispatch(userError(err.message))
                        })
                }
            )
            .catch(err => {
                console.log('Firebase: Error when deleting the user with id ', userId, '. Error: ', err.message)
                dispatch(userError(err.message))
            })
    }
}

export function updateUser(user) {
    return (dispatch) => {
        dispatch(userRequest())
        return editUser(user)
            .then(
                dispatch(editUserSuccess())
            )
            .catch(err => {
                console.log('Error when updating the user with id ', user._id, '. Error: ', err.message)
                dispatch(userError(err.message))
            })
    }
}

export function updateEmail(email) {
    return (dispatch) => {
        dispatch(userRequest())
        return firebaseActions.updateEmail(email)
            .then(
                dispatch(editUserSuccess())
            )
            .catch(err => {
                console.log('Error when updating the email. Error: ', err.message)
                dispatch(userError(err.message))
            })
    }
}

export function updatePassword(password) {
    return (dispatch) => {
        dispatch(userRequest())
        return firebaseActions.updatePassword(password)
            .then(
                dispatch(editUserSuccess())
            )
            .catch(err => {
                console.log('Error when updating the password. Error: ', err.message)
                dispatch(userError(err.message))
            })
    }
}

export function updatePhotoUser(file, filename) {
    const ref = 'pictures/' + filename
    return (dispatch) => {
        dispatch(userRequest())
        return firebaseActions.postPicture(file, ref)
            .then(response => {
               if (response.state === 'success')
                    dispatch(uploadPhotoUserSuccess(response))
                }
            )
            .catch(err => {
                console.log('Error when posting the picture. Error: ', err.message)
                dispatch(userError(err.message))
            })
    }
}

function userRequest() {
    return {
        type: REQUEST_USER
    }
}

function getUserSuccess(payload) {
    return {
        type: FETCH_SUCCESS_USER,
        payload
    }
}

function getUserAnimalsRequest() {
    return {
        type: FETCH_REQUEST_USERS_ANIMALS
    }
}

function getUserAnimalsSuccess(inAdoption, favourites) {
    return {
        type: FETCH_SUCCESS_USERS_ANIMALS,
        inAdoption,
        favourites
    }
}

function getUserAnimalsError() {
    return {
        type: FETCH_ERROR_USERS_ANIMALS
    }
}

function userError(error) {
    return {
        type: USER_ERROR,
        error
    }
}

function deleteUserSuccess() {
    return {
        type: DELETE_SUCCESS
    }
}

function editUserSuccess() {
    return {
        type: EDIT_SUCCESS
    }
}

function uploadPhotoUserSuccess() {
    return {
        type: UPLOAD_PHOTO_SUCCESS
    }
}