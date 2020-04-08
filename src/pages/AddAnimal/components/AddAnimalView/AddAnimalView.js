import React, {Component} from 'react'
import Message from '../../../../components/Common/Message'
import {Redirect} from 'react-router'
import AnimalForm from '../AnimalForm'

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
                <Message>Sorry, you need to be registered to be this page.</Message>
            )
        }

        return (
            <>
                {this.state.submitted ? <Redirect to={"/user/" + this.props.loggedUser._id}/> : ''}
                <div className="container_div">
                    <div className="centered">
                        <h1 className="title"><i className="fas fa-plus-circle"/> Add Animal</h1>
                    </div>
                    <AnimalForm
                        loggedUser={this.props.loggedUser}
                        submitForm={this.submitAnimal}
                        uploadPhoto={this.props.uploadPhoto}
                    />
                </div>
            </>
        )
    }
}

export default AddAnimalView
