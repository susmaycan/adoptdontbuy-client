import {addFavourite, animalByUser, deleteUserAPI, editUser, getUser, removeFavourite} from '../api/users'
import {
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS,
    EDIT_USER_ERROR,
    EDIT_USER_SUCCESS,
    FETCH_ERROR_USERS_ANIMALS,
    FETCH_REQUEST_USERS_ANIMALS,
    FETCH_SUCCESS_USER,
    FETCH_SUCCESS_USERS_ANIMALS,
    FETCH_USER_ERROR,
    REFRESH_USER_SUCCESS,
    REQUEST_USER,
    RESET_USER,
    UPLOAD_PHOTO_USER_ERROR,
    UPLOAD_PHOTO_USER_SUCCESS
} from './actionTypes'
import firebaseActions from '../Firebase/Firebase'

export function fetchUser(userId) {
    return (dispatch) => {
        dispatch(userRequest())
        return getUser(userId)
            .then(user => {
                dispatch(fetchUserSuccess(user))
            })
            .catch(error => {
                console.log('Error when retrieving the user with id ', userId, ' from db. Error: ', error.message)
                dispatch(fetchUserError(error.message))
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
                            dispatch(deleteUserError(err.message))
                        })
                }
            )
            .catch(err => {
                console.log('Firebase: Error when deleting the user with id ', userId, '. Error: ', err.message)
                dispatch(deleteUserError(err.message))
            })
    }
}

export function updateUser(user) {
    return (dispatch) => {
        dispatch(userRequest())
        return editUser(user)
            .then(response =>
                dispatch(editUserSuccess(response))
            )
            .catch(err => {
                console.log('Error when updating the user with id ', user._id, '. Error: ', err.message)
                dispatch(editUserError(err.message))
            })
    }
}

export function addFavouriteAnimal(userId, animalId) {
    return (dispatch) => {
        dispatch(userRequest())
        return addFavourite(userId, animalId)
            .then(response => {
                    dispatch(refreshUserSuccess(response))
                    dispatch(editUserSuccess())
                }
            )
            .catch(err => {
                console.log('Error when updating the user with id ', userId, '. Error: ', err.message)
                dispatch(editUserError(err.message))
            })
    }
}

export function deleteFavouriteAnimal(userId, animalId) {
    return (dispatch) => {
        dispatch(userRequest())
        return removeFavourite(userId, animalId)
            .then(response => {
                dispatch(refreshUserSuccess(response))
                dispatch(editUserSuccess(response))
            })
            .catch(err => {
                console.log('Error when updating the user with id ', userId, '. Error: ', err.message)
                dispatch(editUserError(err.message))
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
                dispatch(editUserError(err.message))
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
                dispatch(editUserError(err.message))
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
                dispatch(uploadPhotoUserError(err.message))
            })
    }
}

export function resetState() {
    return (dispatch) => {
        dispatch(reset())
    }
}


function refreshUserSuccess(payload) {
    return {
        type: REFRESH_USER_SUCCESS,
        payload
    }
}


function reset() {
    return {
        type: RESET_USER
    }
}

function userRequest() {
    return {
        type: REQUEST_USER
    }
}

function fetchUserSuccess(payload) {
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

function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        error
    }
}

function deleteUserSuccess() {
    return {
        type: DELETE_USER_SUCCESS
    }
}

function deleteUserError(error) {
    return {
        type: DELETE_USER_ERROR,
        error
    }
}

function editUserSuccess(user) {
    return {
        type: EDIT_USER_SUCCESS,
        user
    }
}

function editUserError(error) {
    return {
        type: EDIT_USER_ERROR,
        error
    }
}

function uploadPhotoUserSuccess() {
    return {
        type: UPLOAD_PHOTO_USER_SUCCESS
    }
}

function uploadPhotoUserError(error) {
    return {
        type: UPLOAD_PHOTO_USER_ERROR,
        error
    }
}
