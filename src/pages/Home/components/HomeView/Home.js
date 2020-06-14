import React, {Component} from 'react'
import {Translate} from 'react-redux-i18n'
import {codeError} from '../../../../constants'
import {Cat} from 'react-kawaii'
import {AnimalCard, Box, Error, Loading, Message, Subtitle, Title} from '../../../../components'
import PropTypes from 'prop-types'

class Home extends Component {

    static propTypes = {
        animals: PropTypes.array,
        isLoading: PropTypes.bool,
        error: PropTypes.bool,
        user: PropTypes.object,
        isLoggedIn: PropTypes.bool,
        getAnimals: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.state = {
            animalList: this.props.animals
        }
    }

    componentDidMount() {
        this.props.getAnimals()
    }

    componentDidUpdate(prevProps) {
        if (this.props.animals !== prevProps.animals) {
            this.setState({
                animalList: this.props.animals.slice(0, 8)
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            animalList: nextProps.animals.slice(0, 8)
        })
    }

    renderBody() {
        const {user, isLoading, error, isLoggedIn} = this.props
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

        if (this.state.animalList.length === 0) {
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
                    {this.state.animalList.map((animal) =>
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

    render() {
        return (
            <Box>
                <div className="columns is-gapless is-centered">
                    <div className="column is-narrow">
                        <Title>
                            <Translate value='home.title'/>
                            <span className="important">
                                adoptdontbuy
                        </span>
                        </Title>
                    </div>
                    <div className="column is-narrow centered">
                        <Cat size={100} mood="excited" color="#ffc107"/>
                    </div>
                </div>

                {this.renderBody()}
            </Box>
        )
    }
}

export default Home
