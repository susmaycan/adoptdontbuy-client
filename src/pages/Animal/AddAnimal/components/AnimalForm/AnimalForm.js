import React, {Component} from 'react'
import Form from '../../../../../components/AnimalForm'
import {input} from '../../../../../constants'
import PropTypes from 'prop-types'

const ACTION_ADD = "add"

class AnimalForm extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        loggedUser: PropTypes.object.isRequired,
        submitForm: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            animal: {
                owner: this.props.loggedUser !== undefined ? this.props.loggedUser._id : '',
                province: this.props.loggedUser !== undefined ? this.props.loggedUser.province : '',
                region: this.props.loggedUser !== undefined ? this.props.loggedUser.region : '',
                country: this.props.loggedUser !== undefined ? this.props.loggedUser.country : '',
                city: this.props.loggedUser !== undefined ? this.props.loggedUser.city : '',
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.submitForm(this.state.animal)
    }

    updateInput = (e) => {
        let value
        if (e.target.type === input.FILE) {
            const files = e.target.files
            Object.keys(files).map(item => console.log(files[item]))

            value = e.target.files
        } else {
            value = e.target.type === input.CHECKBOX ? e.target.checked : e.target.value
        }

        this.setState({
            animal: {
                ...this.state.animal,
                [e.target.name]: value
            }
        })
    }

    render() {
        const {isLoading} = this.props
        return (
            <Form
                animal={this.state.animal}
                updateInput={this.updateInput}
                submit={this.submitForm}
                action={ACTION_ADD}
                isLoading={isLoading}
            />
        )
    }
}

export default AnimalForm
