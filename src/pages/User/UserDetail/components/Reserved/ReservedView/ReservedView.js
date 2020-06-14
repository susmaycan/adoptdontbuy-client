import React, {Component} from 'react'
import {Loading, Message} from '../../../../../../components'
import ReservedPets from '../ReservedPets'

class ReservedView extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        const {isLoading, error, user, loggedUser, isLoggedIn, isLoadingList, errorList} = this.props

        if (isLoading || isLoadingList) {
            return (
                <Loading/>
            )
        }

        if (error || errorList) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the user. Please, try
                    again later.</Message>
            )
        }

        return (
            <ReservedPets
                user={user}
                loggedUser={loggedUser}
                isLoggedIn={isLoggedIn}
                animals={user.reserved}
                isLoadingList={isLoadingList}
                errorList={errorList}
            />
        )
    }
}

export default ReservedView
