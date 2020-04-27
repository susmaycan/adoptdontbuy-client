import React, {Component} from 'react'
import Message from '../../../../components/Message'
import {Redirect} from 'react-router'
import AnimalForm from '../AnimalForm'
import {Translate} from 'react-redux-i18n'
import Title from '../../../../components/Title'
import Container from "../../../../components/Container";

class AddAnimalView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false
        }
        this.submitAnimal = this.submitAnimal.bind(this)

    }

    submitAnimal(animal) {
        this.props.addAnimal(animal)
        this.setState({
            submitted: true
        })
    }

    render() {
        if (this.props.isLoggedIn === false) {
            return (
                <Message><Translate value='messages.noLogin'/></Message>
            )
        }

        return (
            <>
                {this.state.submitted ? <Redirect to={"/user/" + this.props.loggedUser._id}/> : ''}
                <Container>
                    <Title>
                        <i className="fas fa-plus-circle"/> <Translate value='addAnimal.title'/>
                    </Title>
                    <AnimalForm
                        loggedUser={this.props.loggedUser}
                        submitForm={this.submitAnimal}
                        uploadPhoto={this.props.uploadPhoto}
                    />
                </Container>
            </>
        )
    }
}

export default AddAnimalView
