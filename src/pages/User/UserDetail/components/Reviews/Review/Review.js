import React from 'react'
import './Review.scss'
import PropTypes from 'prop-types'
import Rating from '../Rating'
import {Link} from 'react-router-dom'
import Date from '../../../../../../components/Date'

const Review = ({review, isLoggedIn, loggedUser, deleteReview, user}) => (
    <div className="box">
        <div className="columns is-vcentered">
            <div className="column is-narrow">
                <Link
                    to={{pathname: `/user/${review.from ? review.from._id : ''}`}}
                >
                    {review.from.picture === "unknown" || review.from.picture === undefined ?
                        <img alt="Account's avatar" className="review-image"
                             src={'https://api.adorable.io/avatars/24/' + review.from.username}/>
                        :
                        <img alt="Account's avatar" className="review-image" src={review.from.picture}/>
                    }
                </Link>
            </div>
            <div className="column">
                <div className="columns">
                    <div className="column">
                        <Link
                            className="review-title"
                            to={{pathname: `/user/${review.from ? review.from._id : ''}`}}
                        >
                            <h2>{review.from ? review.from.username : ''}</h2>
                        </Link>
                        <p><Rating value={review.rating}/></p>
                        <p>{review.desc}</p>
                    </div>
                    <div className="column has-text-right">
                        <Date value={review.createdAt}/>
                        <br/>
                        {isLoggedIn && review.from._id === loggedUser._id ?
                            <button className="button is-white" onClick={() => deleteReview(review._id, user._id)}>
                                <span className="icon">
                                <i className="fas fa-trash-alt"/>
                                </span>
                            </button>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Review.propTypes = {
    review: PropTypes.object.isRequired,
    loggedUser: PropTypes.object,
    user: PropTypes.object,
    isLoggedIn: PropTypes.bool.isRequired,
    deleteReview: PropTypes.func.isRequired
}
export default Review
