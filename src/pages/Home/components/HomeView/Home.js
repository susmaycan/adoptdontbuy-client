import React, {Component} from 'react'
import {Cat} from 'react-kawaii'
import {Box, Title} from '../../../../components'
import PropTypes from 'prop-types'
import AnimalList from "../AnimalList";

class Home extends Component {

    static propTypes = {
        animals: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        getAnimals: PropTypes.func.isRequired
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

    render() {
        return (
            <Box>
                <div className="columns is-gapless is-centered">
                    <div className="column is-narrow">
                        <Title>
                            <span className="important">
                                adoptdontbuy
                            </span>
                        </Title>
                    </div>
                    <div className="column is-narrow centered">
                        <Cat size={100} mood="excited" color="#ffc107"/>
                    </div>
                </div>

                <AnimalList {...this.props} animalList={this.state.animalList} />
            </Box>
        )
    }
}

export default Home
