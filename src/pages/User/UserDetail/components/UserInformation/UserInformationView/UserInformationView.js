import React, {Component} from 'react'
import User from '../Information'
import {Loading, Message} from '../../../../../../components'
import PropTypes from 'prop-types'

class UserInformationView extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        successDelete: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        loggedUser: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        getUser: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        const {isLoading, error, errorMsg, user, successDelete, loggedUser, isLoggedIn} = this.props

        if (isLoading) {
            return (
                <Loading/>
            )
        }
        if (error) {
            return (
                <Message>Sorry. {errorMsg}</Message>
            )
        }

        if(successDelete){
            this.props.history.push('/')
            this.props.logout()
            this.props.resetState()
            return null
        }

        return (
            <User
                user={user}
                loggedUser={loggedUser}
                isLoggedIn={isLoggedIn}
            />
        )
    }
}

export default UserInformationView
