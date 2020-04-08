import React, {Component} from 'react'
import Form from '../Form'
import Loading from '../../../../components/Common/Loading'
import Message from '../../../../components/Common/Message'
import {
    Redirect
} from 'react-router'

const EMPTY_USER = {}

class EditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false
        }
        this.submitForm = this.submitForm.bind(this)
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    submitForm(user) {
        this.props.updateUserDB(user)
        this.setState({
            submitted: true
        })
    }

    render() {

        if (this.props.isLoggedIn === false) {
            return (
                <Message>Sorry, you need to be registered to be this page.</Message>
            )
        }

        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        }

        if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the user. Please, try
                    again later.</Message>
            )
        }

        if (this.props.user === EMPTY_USER) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> the user in the database.</Message>
            )
        }

        if (this.props.user._id !== this.props.loggedUser._id) {
            return (
                <Message>You ({this.props.loggedUser._id})<strong>can't</strong> edit this user ({this.props.user._id}).</Message>
            )
        }

        return (
            <>
                {this.state.submitted ? <Redirect to={"/user/" + this.props.user._id}/> : ''}
                <Form
                    user={this.props.user}
                    loggedUser={this.props.loggedUser}
                    submitForm={this.submitForm}
                    uploadPhoto = {this.props.uploadPhoto}
                />
            </>
        )
    }

}

export default EditUser
