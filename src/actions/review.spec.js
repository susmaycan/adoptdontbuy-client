import * as actions from './review'
import actionTypes from './actionTypes'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {REVIEW, USER_WITH_ANIMALS, ERROR_MESSAGE, SUCCESS_MESSAGE } from '../utils/testConst'
import fetchMock from 'fetch-mock'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})

describe('Review actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions()
    })

    it('creates POST_REVIEW_SUCCESS action when posting a review correctly', () => {

        fetchMock.post('http://localhost:3001/review', {
                body: REVIEW,
                headers: {'content-type': 'application/json'},
            },
            {repeat: 1}
        )

        fetchMock.get('http://localhost:3001/user/' + USER_WITH_ANIMALS._id, {
            body: USER_WITH_ANIMALS
            ,
            headers: {'content-type': 'application/json'}
        })

        const expectedActions = [
            {type: actionTypes.REVIEW_REQUEST},
            {type: actionTypes.POST_REVIEW_SUCCESS},
            {type: actionTypes.FETCH_SUCCESS_USER, payload: USER_WITH_ANIMALS},
            {type: actionTypes.RESET_REVIEW}
        ]

        return store.dispatch(actions.addReview(REVIEW, USER_WITH_ANIMALS._id))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })

    it('creates POST_REVIEW_ERROR action when posting a review has errors', () => {

        fetchMock.post('http://localhost:3001/review', () => {
            throw new Error(ERROR_MESSAGE)
        }, {repeat: 1, overwriteRoutes: false})

        const expectedActions = [
            {type: actionTypes.REVIEW_REQUEST},
            {type: actionTypes.POST_REVIEW_ERROR, error: ERROR_MESSAGE}
        ]

        return store.dispatch(actions.addReview(REVIEW, USER_WITH_ANIMALS._id))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })

    it('creates DELETE_REVIEW_SUCCESS action when deleting a review correctly', () => {

        fetchMock.delete('http://localhost:3001/review/' + REVIEW._id, {
                body: { message: SUCCESS_MESSAGE }
            },
            {repeat: 1}
        )

        const expectedActions = [
            {type: actionTypes.REVIEW_REQUEST},
            {type: actionTypes.DELETE_REVIEW_SUCCESS},
            {type: actionTypes.FETCH_SUCCESS_USER, payload: USER_WITH_ANIMALS},
            {type: actionTypes.RESET_REVIEW}
        ]

        return store.dispatch(actions.removeReview(REVIEW._id, USER_WITH_ANIMALS._id))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })

    it('creates DELETE_REVIEW_ERROR action when deleting a review has errors', () => {

        fetchMock.delete('http://localhost:3001/review/' + REVIEW._id, () => {
            throw new Error(ERROR_MESSAGE)
        }, {repeat: 1, overwriteRoutes: false})

        const expectedActions = [
            {type: actionTypes.REVIEW_REQUEST},
            {type: actionTypes.DELETE_REVIEW_ERROR, error: ERROR_MESSAGE}
        ]

        return store.dispatch(actions.removeReview(REVIEW._id, USER_WITH_ANIMALS._id))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })


})
