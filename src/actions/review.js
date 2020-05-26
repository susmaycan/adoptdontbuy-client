import {
    postReview,
    deleteReview
} from '../api/reviews'

import {
    REVIEW_REQUEST,
    POST_REVIEW_ERROR,
    POST_REVIEW_SUCCESS,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_ERROR,
    RESET_REVIEW
} from './actionTypes'

export function addReview(review) {
    return (dispatch) => {
        dispatch(reviewRequest())

        return postReview(review)
            .then(
                dispatch(postReviewSuccess())
            )
            .catch(error => {
                console.log("There was an error posting the review: ", error.message)
                dispatch(postReviewError(error.message))
            })
    }
}

export function removeReview(reviewId) {
    return (dispatch) => {
        dispatch(reviewRequest())
        return deleteReview(reviewId)
            .then(() => {
                dispatch(deleteReviewSuccess())
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
