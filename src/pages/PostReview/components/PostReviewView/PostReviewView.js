import React from 'react'
import {Button, Modal} from '../../../../components'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from '../../../../constants'
import PropTypes from 'prop-types'
import PostReviewForm from '../PostReviewForm'

class PostReviewView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    render() {

        const {show} = this.state
        return (
            <React.Fragment>
                <Button
                    onAction={this.handleShow}
                >
                    <Translate value={buttonTypes.ADD_REVIEW}/>
                </Button>

                <Modal
                    show={show}
                    handleClose={this.handleClose}
                    title='addReview.title'
                >
                    <PostReviewForm {...this.props} handleClose={this.handleClose} />
                </Modal>
            </React.Fragment>
        )
    }
}

PostReviewView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    postReview: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loggedUser: PropTypes.object.isRequired,
    success: PropTypes.bool.isRequired
}
export default PostReviewView
