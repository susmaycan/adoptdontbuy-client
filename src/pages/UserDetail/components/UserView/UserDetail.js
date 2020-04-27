import React, {Component} from 'react'
import User from '../User'
import Loading from '../../../../components/Loading'
import Message from '../../../../components/Message'

class UserDetail extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
        this.props.getAnimals(this.props.match.params.userId)
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        } else if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the user. Please, try
                    again later.</Message>
            )
        } else {
            if (this.props.user === {}) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> the user in the database..</Message>
                )
            } else {
                return (
                    <User
                        user={this.props.user}
                        loggedUser={this.props.loggedUser}
                        isLoggedIn={this.props.isLoggedIn}
                        animalList={this.props.animalList}
                        isLoadingList={this.props.isLoadingList}
                        errorList={this.props.errorList}
                        favourites={this.props.favourites}
                    />
                )
            }
        }
    }
}

export default UserDetail
