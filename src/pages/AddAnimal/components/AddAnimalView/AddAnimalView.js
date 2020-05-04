import React, {Component} from 'react'
import {Redirect} from 'react-router'
import AnimalForm from '../AnimalForm'
import {Translate} from 'react-redux-i18n'
import Title from '../../../../components/Title'
import Box from "../../../../components/Box";

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
        this.props.history.push('/')
    }

    render() {
        const {isLoggedIn, loggedUser, uploadPhoto} = this.props
        if (!isLoggedIn) {
            this.props.history.push('/login')
            return null
        } else {
            return (
                <Box>
                    <Title>
                        <i className="fas fa-plus-circle"/> <Translate value='addAnimal.title'/>
                    </Title>
                    <AnimalForm
                        loggedUser={loggedUser}
                        submitForm={this.submitAnimal}
                        uploadPhoto={uploadPhoto}
                    />
                </Box>
            )
        }
    }
}

export default AddAnimalView
