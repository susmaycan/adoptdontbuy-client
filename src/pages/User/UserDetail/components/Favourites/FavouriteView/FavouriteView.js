import React, {Component} from 'react'
import Favourites from '../FavouritePets'
import {Loading, Message} from '../../../../../../components'

class FavouriteView extends Component {

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
            <Favourites
                user={user}
                loggedUser={loggedUser}
                isLoggedIn={isLoggedIn}
                animals={user.favourites}
                isLoadingList={isLoadingList}
                errorList={errorList}
            />
        )
    }
}

export default FavouriteView
