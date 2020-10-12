import React, {Component} from 'react'
import {Loading, Message} from '../../../../../../components'
import AdoptedPets from '../AdoptedPets'
import PropTypes from 'prop-types'

class AdoptedView extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        loggedUser: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        getUser: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }

    render() {
        const {isLoading, error, user, loggedUser, isLoggedIn} = this.props

        if (isLoading) {
            return (
                <Loading/>
            )
        }

        if (error) {
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
                isLoading={isLoading}
                error={error}
            />
        )
    }
}

export default AdoptedView
