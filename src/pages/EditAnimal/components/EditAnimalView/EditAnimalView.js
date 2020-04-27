import React, {Component} from 'react'
import Message from '../../../../components/Message'
import {Redirect} from 'react-router'
import AnimalForm from '../AnimalForm'
import Loading from "../../../../components/Loading";
import {Translate} from 'react-redux-i18n'
import Title from '../../../../components/Title'
import Container from '../../../../components/Container'

class EditAnimalView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            id_url: ''
        }
        this.submitAnimal = this.submitAnimal.bind(this)

    }

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }

    submitAnimal(animal) {
        this.props.editAnimal(animal)
        this.setState({
            submitted: true,
            id_url: animal._id
        })
    }

    render() {

        if (!this.props.isLoggedIn) {
            return (
                <Message>Sorry, you need to be registered to be this page.</Message>
            )
        }

        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        }

        if (this.props.error) {
            return (
                <Message>Sorry, there was an error and we couldn't retrieve this animal.</Message>
            )
        }

        if (this.props.isLoggedIn && this.props.animal !== undefined && this.props.loggedUser._id !== this.props.animal.owner._id) {
            return (
                <Message>Sorry, you <strong>cannot</strong> edit this animal.</Message>
            )
        }

        return (
            <>
                {this.state.submitted ? <Redirect to={"/animal/" + this.state.id_url}/> : ''}
                <Container>
                    <Title>
                        <i className="fas fa-plus-circle"/>
                        {' '}
                        <Translate value='editAnimal.title'/>
                    </Title>
                    <AnimalForm
                        loggedUser={this.props.loggedUser}
                        submitForm={this.submitAnimal}
                        uploadPhoto={this.props.uploadPhoto}
                        animal={this.props.animal}
                    />
                </Container>
            </>
        )
    }
}

export default EditAnimalView
