import React, {Component} from 'react'
import Form from '../../../../components/AnimalForm'

const ACTION_ADD = "add"
const CHECKBOX_TYPE = "checkbox"

class AnimalForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animal: {
                owner: this.props.loggedUser !== undefined ? this.props.loggedUser._id : ''
            },
        }
        this.submitForm = this.submitForm.bind(this)
        this.updateInput = this.updateInput.bind(this)

    }

    submitForm(e) {
        e.preventDefault()
        this.props.submitForm(this.state.animal)
    }

    updateInput(e) {
        const value = e.target.type === CHECKBOX_TYPE ? e.target.checked : e.target.value
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
                action={ACTION_ADD}
            />
        )
    }
}

export default AnimalForm
