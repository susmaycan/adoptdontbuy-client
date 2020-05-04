import React, {Component} from 'react'
import {Translate} from 'react-redux-i18n'
import {codeError} from '../../../../constants'
import {Cat} from 'react-kawaii'
import {
    AnimalCard,
    Loading,
    Message,
    Subtitle,
    Title,
    Error,
    Box
} from '../../../../components'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animalList: this.props.animals
        }
    }

    componentDidMount() {
        this.props.getAnimals()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            animalList: nextProps.animals.slice(0, 8)
        })
    }

    renderBody() {
        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        } else if (this.props.error) {
            return (
                <Error code={codeError.SERVER_UNAVAILABLE}/>
            )
        } else {
            if (this.state.animalList.length === 0) {
                return (
                    <Message><Translate value='messages.elementNotFound'/></Message>
                )
            } else {
                return (
                    <>
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
                                    />
                                </div>
                            )}
                        </div>
                    </>
                )
            }

        }
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
