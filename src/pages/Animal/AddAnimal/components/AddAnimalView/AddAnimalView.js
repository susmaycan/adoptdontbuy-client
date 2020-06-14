import React, {Component} from 'react'
import AnimalForm from '../AnimalForm'
import {Translate} from 'react-redux-i18n'
import Title from '../../../../../components/Title'
import Box from "../../../../../components/Box";

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
    }

    render() {
        const {isLoggedIn, loggedUser, uploadPhoto, success, animal, isLoading} = this.props
        if (!isLoggedIn) {
            this.props.history.push('/login')
            return null
        }
        if (success) {
            this.props.history.push('/animal/' + animal._id)
            this.props.reset()
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
                        isLoading={isLoading}
                    />
                </Box>
            )
        }
    }
}

export default AddAnimalView
