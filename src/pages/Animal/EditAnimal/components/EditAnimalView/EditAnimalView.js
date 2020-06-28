import React, {Component} from 'react'
import AnimalForm from '../AnimalForm'
import {Translate} from 'react-redux-i18n'
import {Box, Message, Loading, Title} from '../../../../../components'
import PropTypes from 'prop-types'

class EditAnimalView extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        errorGet: PropTypes.bool.isRequired,
        success: PropTypes.bool.isRequired,
        animal: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        errorGetMsg: PropTypes.string.isRequired,
        loggedUser: PropTypes.object.isRequired,
        editAnimal: PropTypes.func.isRequired,
        getAnimal: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }

    render() {

        const {isLoggedIn, isLoading, errorGet, errorGetMsg, animal, loggedUser, success} = this.props
        if (!isLoggedIn) {
            this.props.history.push('/login')
            return null
        }

        if (isLoading) {
            return (
                <Loading/>
            )
        }

        if (errorGet) {
            return (
                <Message>Sorry, {errorGetMsg}</Message>
            )
        }

        if (isLoggedIn && animal !== undefined && animal.owner !== undefined && loggedUser._id !== animal.owner._id) {
            window.setTimeout(this.props.history.push('/'), 5000)
            return (
                <Message>Sorry, you <strong>cannot</strong> edit this animal.</Message>
            )
        }

        if (success && animal !== undefined) {
            this.props.history.push('/animal/' + animal._id)
            this.props.reset()
            return null
        }


        return (
            <Box>
                <Title>
                    <i className="fas fa-plus-circle"/>
                    &nbsp;
                    <Translate value='editAnimal.title'/>
                </Title>
                <AnimalForm
                    loggedUser={loggedUser}
                    submitForm={this.props.editAnimal}
                    uploadPhoto={this.props.uploadPhoto}
                    animal={animal}
                    isLoading={isLoading}
                />
            </Box>
        )
    }
}

export default EditAnimalView
