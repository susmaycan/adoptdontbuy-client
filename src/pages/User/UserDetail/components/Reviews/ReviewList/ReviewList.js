import React from 'react'
import {Box, Message} from '../../../../../../components'
import PostReview from '../../../../../PostReview'
import PropTypes from 'prop-types'
import Review from "../Review";
import {Translate} from 'react-redux-i18n'

const ReviewList = ({reviewList, isLoggedIn, loggedUser, user, deleteReview}) => (
    <Box>
        {isLoggedIn && loggedUser._id !== user._id ?
            <div className="has-text-right">
                <PostReview/>
            </div>
            :
            null}

        {reviewList === undefined || reviewList.length === 0 ?
            <Message>
                <Translate value='messages.emptyList'/>
            </Message>
            :
            reviewList.map(review => (
                <Review
                    deleteReview={deleteReview}
                    loggedUser={loggedUser}
                    isLoggedIn={isLoggedIn}
                    review={review}
                />
            ))
        }

    </Box>
)
ReviewList.propTypes = {
    reviewList: PropTypes.array,
    user: PropTypes.object,
    loggedUser: PropTypes.object,
    isLoggedIn: PropTypes.bool.isRequired,
    deleteReview: PropTypes.func.isRequired,
}
export default ReviewList
