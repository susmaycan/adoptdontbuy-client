import React, {Component} from 'react'
import Pets from '../Pets'
import {Loading, Message} from '../../../../../../components'

class PetsByUserView extends Component {

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
                    <Pets
                        user={user}
                        loggedUser={loggedUser}
                        isLoggedIn={isLoggedIn}
                        animals={user.inAdoption}
                        isLoadingList={isLoading}
                        errorList={error}
                    />
                )
            }
        }
    }
}

export default PetsByUserView
