import React from 'react'
import PropTypes from 'prop-types'
import Form from '../Form'

class PostReviewForm extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        success: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        postReview: PropTypes.func.isRequired,
        handleClose: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        loggedUser: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            review: {
                desc: '',
                rating: '',
                from: this.props.loggedUser._id,
                to: this.props.user._id
            }
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.postReview(this.state.review, this.props.user._id)
    }

    updateInput = (e) => {
        e.preventDefault()

        this.setState({
            review: {
                ...this.state.review,
                [e.target.name]: e.target.value
            }
        })
    }

    resetReview() {
        this.setState({
            review: {
                ...this.state.review,
                desc: '',
                rating: ''
            }
        })
    }

    render() {
        const {isLoading, error, errorMsg, success, handleClose} = this.props
        const {review} = this.state

        if (success) {
            setTimeout(() => {
                handleClose()
                this.resetReview()
            }, 500)
        }

        return (
            <Form
                review={review}
                error={error}
                errorMsg={errorMsg}
                isLoading={isLoading}
                handleSubmit={this.handleSubmit}
                updateInput={this.updateInput}
            />
        )
    }
}

export default PostReviewForm
