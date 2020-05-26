import React, {Component} from 'react'
import User from '../Information'
import {Loading, Message} from '../../../../../../components'

class UserInformationView extends Component {

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
