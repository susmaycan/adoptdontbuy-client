import React, {Component} from 'react'
import ReviewList from '../ReviewList'
import {Loading, Message} from '../../../../../../components'
import PropTypes from 'prop-types'

class ReviewsView extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        getUser: PropTypes.func.isRequired,
        deleteReview: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        loggedUser: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        const {isLoading, error, user, loggedUser, isLoggedIn, deleteReview} = this.props
        if (isLoading) {
            return (
                <Loading/>
            )
        }

        if (error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the user. Please, try
                    again later.</Message>
            )
        }

        if (user === {}) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> the user in the database..</Message>
            )
        }

        return (
            <ReviewList
                user={user}
                reviewList={user.reviews}
                loggedUser={loggedUser}
                isLoggedIn={isLoggedIn}
                deleteReview={deleteReview}
            />
        )
    }
}

export default ReviewsView
