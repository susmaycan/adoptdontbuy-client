import React, {Component} from 'react'
import Animal from '../Animal'
import {Loading, Message } from '../../../../../components'
import PropTypes from 'prop-types'

class AnimalDetail extends Component {

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }

    static propTypes = {
        animal: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        errorDelete: PropTypes.bool.isRequired,
        errorDeleteMsg: PropTypes.string.isRequired,
        successDelete: PropTypes.bool.isRequired,
        success: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        getAnimal: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired
    }


    render() {
        const {isLoading, error, animal, errorMsg, user, successDelete} = this.props

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

        if (animal === {}) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> the animal in the database.</Message>
            )
        }

        if (successDelete) {
            this.props.history.push('/')
            this.props.reset()

            return null
        }

        return (
            <Animal
                user={user}
                animal={animal}
            />
        )
    }
}

export default AnimalDetail
