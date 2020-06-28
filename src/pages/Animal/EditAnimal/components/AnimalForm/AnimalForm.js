import React, {Component} from 'react'
import Form from '../../../../../components/AnimalForm'
import PropTypes from 'prop-types'

const ACTION_EDIT = "edit"
const CHECKBOX_TYPE = "checkbox"
const FILE_TYPE = 'file'

class AnimalForm extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        animal: PropTypes.object.isRequired,
        loggedUser: PropTypes.object.isRequired,
        submitForm: PropTypes.func.isRequired
    }

    state = {
        animal: this.props.animal
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.submitForm(this.state.animal)
    }

    updateInput = (e) => {
        let value = ''
        if (e.target.type === FILE_TYPE) {
            value = e.target.files[0]
        } else {
            value = e.target.type === CHECKBOX_TYPE ? e.target.checked : e.target.value
        }

        this.setState({
            animal: {
                ...this.state.animal,
                [e.target.name]: value
            }
        })
    }

    render() {
        return (
            <Form
                animal={this.state.animal}
                updateInput={this.updateInput}
                submit={this.submitForm}
                action={ACTION_EDIT}
                isLoading={this.props.isLoading}
            />
        )
    }
}

export default AnimalForm
