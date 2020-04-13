import React, {Component} from 'react'
import Animal from '../Animal'
import Loading from '../../../../components/Common/Loading'
import Message from '../../../../components/Common/Message'
import {
    Redirect
} from 'react-router'

class AnimalDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deletedAnimal: false
        }
        this.deleteAnimal = this.deleteAnimal.bind(this)
    }

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }

    deleteAnimal() {
        this.setState({
            deletedAnimal: true
        })
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        } else if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the animal. Please, try
                    again later.</Message>
            )
        } else {
            if (this.props.animal === {}) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> the animal in the database...</Message>
                )
            } else {
                return (
                    <>
                        {this.state.deletedAnimal ? <Redirect to={'/'}/> : null}
                        <Animal
                            user={this.props.user}
                            animal={this.props.animal}
                            deleteAnimal={this.deleteAnimal}
                        />
                    </>
                )
            }
        }
    }
}

export default AnimalDetail
