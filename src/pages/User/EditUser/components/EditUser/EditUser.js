import React, {Component} from 'react'
import Form from '../Form'
import {Loading, Message, Title, Box} from '../../../../../components/'
import {Translate} from 'react-redux-i18n'
import PropTypes from 'prop-types'

class EditUser extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        errorFetch: PropTypes.bool.isRequired,
        errorMsgFetch: PropTypes.string.isRequired,
        errorMsg: PropTypes.string.isRequired,
        success: PropTypes.bool.isRequired,
        loggedUser: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        getUser: PropTypes.func.isRequired,
        updateUserDB: PropTypes.func.isRequired,
        uploadPhoto: PropTypes.func.isRequired,
        updateEmail: PropTypes.func.isRequired,
        updatePassword: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        resetState: PropTypes.func.isRequired
    }

    state = {
        submitted: false
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    submitForm = (props) => {
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
        const {success, errorFetch, errorFetchMsg, isLoading, error, errorMsg, isLoggedIn} = this.props

        if (!isLoggedIn) {
            this.props.history.push("/login")
            return null
        }

        if (isLoading) {
            return (
                <Loading/>
            )
        }

        if (errorFetch) {
            return (
                <Message>Sorry, there was a problem. {errorFetchMsg} Please, try
                    again later.</Message>
            )
        }

        if (this.props.user._id !== this.props.loggedUser._id) {
            this.props.history.push("/")
            return null
        }

        if (success) {
            this.props.history.push("/user/" + this.props.user._id)
            this.props.resetState()
        }

        return (
            <Box>
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
                    error={error}
                    errorMsg={errorMsg}
                    isLoading={isLoading}
                />
            </Box>
        )
    }

}

export default EditUser
