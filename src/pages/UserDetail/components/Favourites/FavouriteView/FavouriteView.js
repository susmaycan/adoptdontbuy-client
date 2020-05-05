import React, {Component} from 'react'
import Favourites from '../FavouritePets'
import {Loading, Message} from '../../../../../components'

class FavouriteView extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
        this.props.getAnimals(this.props.match.params.userId)
    }

    render() {
        const {isLoading, error, user, loggedUser, isLoggedIn, animalList, isLoadingList, errorList} = this.props
        if (isLoading || isLoadingList) {
            return (
                <Loading/>
            )
        } else if (error || errorList) {
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
                    <Favourites
                        user={user}
                        loggedUser={loggedUser}
                        isLoggedIn={isLoggedIn}
                        animals={animalList}
                        isLoadingList={isLoadingList}
                        errorList={errorList}
                    />
                )
            }
        }
    }
}

export default FavouriteView
