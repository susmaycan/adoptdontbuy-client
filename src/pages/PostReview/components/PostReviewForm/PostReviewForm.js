import React from 'react'
import {Translate} from 'react-redux-i18n'
import {buttonTypes, input} from "../../../../constants";
import Button from "../../../../components/Button";
import PropTypes from 'prop-types'
import {Notification} from "../../../../components";

class PostReviewForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            review: {
                title: '',
                desc: '',
                rating: '',
                from: this.props.loggedUser._id,
                to: this.props.user._id
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateInput = this.updateInput.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.postReview(this.state.review)
    }

    updateInput(e) {
        e.preventDefault()

        this.setState({
            review: {
                ...this.state.review,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const {isLoading, error, errorMsg, success} = this.props
        const {review} = this.state

        if(success){
            setTimeout(() => {
                this.props.reset()
                this.props.handleClose()
            }, 500)
        }

        return (
            <form className="form-animal" onSubmit={this.handleSubmit}>

                <div className="field">
                    <label className="label"><Translate value='review.title'/></label>
                    <div className="control is-expanded">
                        <input
                            onChange={this.updateInput}
                            className="input"
                            required
                            value={review.title}
                            name="title"
                            placeholder="Title"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label"><Translate value='review.rating'/></label>
                    <div className="control is-expanded">
                        <input
                            name="rating"
                            onChange={this.updateInput}
                            value={review.rating}
                            className="input"
                            type="number"
                            min={0}
                            required
                            max={5}
                            placeholder="From 0 to 5"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label"><Translate value='review.desc'/></label>
                    <div className="control is-expanded">
                        <textarea
                            name="desc"
                            onChange={this.updateInput}
                            value={review.desc}
                            className="textarea"
                            placeholder="Tell us more about your experience"/>
                    </div>
                </div>
                {error &&
                <Notification error={true}>{errorMsg}</Notification>
                }
                {isLoading ?
                    <button className="button is-loading">Loading...</button>
                    :
                    <Button
                        submit={true}
                    >
                        <Translate value={buttonTypes.FINISH}/>
                    </Button>
                }
            </form>
        )
    }
}

PostReviewForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    postReview: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loggedUser: PropTypes.object.isRequired
}
export default PostReviewForm
