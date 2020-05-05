import React, {Component} from 'react'
import Animal from '../Animal'
import Loading from '../../../../components/Loading'
import Message from '../../../../components/Message'

class AnimalDetail extends Component {

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }


    render() {
        const {isLoading, error, animal, errorMsg, user, successDelete} = this.props
        if (isLoading) {
            return (
                <Loading/>
            )
        } else if (error) {
            return (
                <Message>Sorry. {errorMsg}</Message>
            )
        } else {
            if (animal === {}) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> the animal in the database...</Message>
                )
            }
            if (successDelete) {
                this.props.history.push('/')
                this.props.reset()

                return null
            } else {
                return (
                    <Animal
                        user={user}
                        animal={animal}
                    />
                )
            }
        }
    }
}

export default AnimalDetail
