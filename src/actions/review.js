import {deleteReview, postReview} from '../api/reviews'

import {
    DELETE_REVIEW_ERROR,
    DELETE_REVIEW_SUCCESS, FETCH_SUCCESS_USER, FETCH_USER_ERROR,
    POST_REVIEW_ERROR,
    POST_REVIEW_SUCCESS,
    RESET_REVIEW,
    REVIEW_REQUEST
} from './actionTypes'
import {getUser} from "../api/users";

export function addReview(review, userId) {
    return (dispatch) => {
        dispatch(reviewRequest())

        return postReview(review)
            .then(() => {
                return getUser(userId)
                    .then(user => {
                        dispatch(postReviewSuccess())
                        dispatch(fetchUserSuccess(user))
                        dispatch(resetReviewState())
                    })
                    .catch(error => {
                        console.log('Error when retrieving the user with id ', userId, ' from db. Error: ', error.message)
                        dispatch(fetchUserError(error.message))
                    })
            })
            .catch(error => {
                console.log("There was an error posting the review: ", error.message)
                dispatch(postReviewError(error.message))
            })
    }
}

export function removeReview(reviewId, userId) {
    return (dispatch) => {
        dispatch(reviewRequest())
        return deleteReview(reviewId)
            .then(() => {
                return getUser(userId)
                    .then(user => {
                        dispatch(deleteReviewSuccess())
                        dispatch(fetchUserSuccess(user))
                        dispatch(resetReviewState())
                    })
                    .catch(error => {
                        console.log('Error when retrieving the user with id ', userId, ' from db. Error: ', error.message)
                        dispatch(fetchUserError(error.message))
                    })
            })
            .catch(error => {
                dispatch(deleteReviewError(error.message))
            })
    }
}

export function resetReviewState() {
    return {
        type: RESET_REVIEW
    }
}

function postReviewSuccess() {
    return {
        type: POST_REVIEW_SUCCESS
    }
}

function reviewRequest() {
    return {
        type: REVIEW_REQUEST
    }
}

function postReviewError(error) {
    return {
        type: POST_REVIEW_ERROR,
        error
    }
}

function deleteReviewError(error) {
    return {
        type: DELETE_REVIEW_ERROR,
        error
    }
}

function deleteReviewSuccess() {
    return {
        type: DELETE_REVIEW_SUCCESS
    }
}

function fetchUserSuccess(payload) {
    return {
        type: FETCH_SUCCESS_USER,
        payload
    }
}

function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        error
    }
}
