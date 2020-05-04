import React, {Component} from 'react'
import User from '../Information'
import {Loading, Message} from '../../../../../components'

class UserInformationView extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        const {isLoading, error, user, loggedUser, isLoggedIn} = this.props
        if (isLoading) {
            return (
                <Loading/>
            )
        } else if (error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the user. Please, try
                    again later.</Message>
            )
        } else {
            if (user === {}) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> the user in the database..</Message>
                )
            } else {
                return (
                    <User
                        user={user}
                        loggedUser={loggedUser}
                        isLoggedIn={isLoggedIn}
                    />
                )
            }
        }
    }
}

export default UserInformationView
