import React, {Component} from 'react'
import AnimalForm from '../AnimalForm'
import {Translate} from 'react-redux-i18n'
import Title from '../../../../../components/Title'
import Box from "../../../../../components/Box";
import PropTypes from 'prop-types'

class AddAnimalView extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        success: PropTypes.bool.isRequired,
        animal: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        loggedUser: PropTypes.object.isRequired,
        addAnimal: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    state = {
        submitted: false
    }

    submitAnimal = (animal) => {
        this.props.addAnimal(animal)
    }

    render() {
        const {isLoggedIn, loggedUser, success, animal, isLoading, reset} = this.props

        if (!isLoggedIn) {
            this.props.history.push('/login')
            return null
        }

        if (success) {
            this.props.history.push('/animal/' + animal._id)
            reset()
            return null
        }

        return (
            <Box>
                <Title>
                    <i className="fas fa-plus-circle"/> <Translate value='addAnimal.title'/>
                </Title>
                <AnimalForm
                    loggedUser={loggedUser}
                    submitForm={this.submitAnimal}
                    isLoading={isLoading}
                />
            </Box>
        )
    }
}

export default AddAnimalView
