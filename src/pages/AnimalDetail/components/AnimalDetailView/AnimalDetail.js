import React, { Component } from 'react'
import Animal from '../Animal'
import Loading from '../../../../components/Common/Loading'
import Message from '../../../../components/Common/Message'

class AnimalDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animal: {}
        }
    }

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Loading />
            )
        } else if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the animal. Please, try again later.</Message>
            )
        } else {
            if (this.state.animal === {}) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> the animal in the database...</Message>
                )
            } else {
                return (
                    <Animal
                        user={this.props.user}
                        animal={this.props.animal}
                    />
                )
            }
        }
    }
}

export default AnimalDetail
