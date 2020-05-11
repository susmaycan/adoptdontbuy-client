import React, {Component} from 'react'
import Message from '../../../../components/Message'
import AnimalForm from '../AnimalForm'
import Loading from "../../../../components/Loading";
import {Translate} from 'react-redux-i18n'
import Title from '../../../../components/Title'
import Box from '../../../../components/Box'

class EditAnimalView extends Component {

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
                />
            </Box>
        )
    }
}

export default EditAnimalView
