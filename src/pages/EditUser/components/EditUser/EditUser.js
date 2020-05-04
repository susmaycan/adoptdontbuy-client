import React, {Component} from 'react'
import Form from '../Form'
import Loading from '../../../../components/Loading'
import Message from '../../../../components/Message'
import {
    Redirect
} from 'react-router'
import Title from '../../../../components/Title'
import {Translate} from 'react-redux-i18n'
import Box from "../../../../components/Box";

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

    submitForm(props) {
        const user = props.user
        const password = props.password.newPassword
        let logout = false
        if (password !== '' && password !== undefined) {
            this.props.updatePassword(password)
            logout = true
        }

        if (user.email !== this.props.loggedUser.email) {
            this.props.updateEmail(user.email)
            logout = true
        }

        this.props.updateUserDB(user)

        if (logout)
            this.props.logout()

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
            <Box>
                {this.state.submitted ? <Redirect to={"/user/" + this.props.user._id}/> : ''}
                <Title>
                    <i className="fas fa-plus-circle"/>
                    {' '}
                    <Translate value='editUser.title'/>
                </Title>
                <Form
                    user={this.props.user}
                    loggedUser={this.props.loggedUser}
                    submitForm={this.submitForm}
                    uploadPhoto={this.props.uploadPhoto}
                />
            </Box>
        )
    }

}

export default EditUser
