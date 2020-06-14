import React, {Component} from 'react'
import {Loading, Message} from '../../../../../../components'
import AdoptedPets from '../AdoptedPets'

class AdoptedView extends Component {

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
            <AdoptedPets
                user={user}
                loggedUser={loggedUser}
                isLoggedIn={isLoggedIn}
                animals={user.adopted}
                isLoadingList={isLoadingList}
                errorList={errorList}
            />
        )
    }
}

export default AdoptedView
