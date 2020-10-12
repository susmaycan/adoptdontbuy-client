import React, {Component} from 'react'
import {Translate} from 'react-redux-i18n'
import {codeError} from '../../../../constants'
import {AnimalCard, Error, Loading, Message, Subtitle} from '../../../../components'
import PropTypes from 'prop-types'

class AnimalList extends Component {

    static propTypes = {
        animalList: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired
    }

    render() {
        const {user, isLoading, error, isLoggedIn, animalList} = this.props

        if (isLoading) {
            return (
                <Loading/>
            )
        }

        if (error) {
            return (
                <Error code={codeError.SERVER_UNAVAILABLE}/>
            )
        }

        if (animalList.length === 0) {
            return (
                <Message><Translate value='messages.elementNotFound'/></Message>
            )
        }

        return (
            <React.Fragment>
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <Subtitle><Translate value='home.latest'/></Subtitle>
                    </div>
                </div>
                <div className="columns is-centered is-multiline is-mobile">
                    {animalList.map((animal) =>
                        <div key={animal._id} className="column is-narrow">
                            <AnimalCard
                                animal={animal}
                                isLoggedIn={isLoggedIn}
                                user={user}
                            />
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default AnimalList
