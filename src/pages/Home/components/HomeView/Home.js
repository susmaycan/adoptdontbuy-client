import React, { Component } from 'react'
import {
    Row,
} from 'react-bootstrap'
import AnimalCard from '../../../../components/AnimalCard'
import Loading from '../../../../components/Common/Loading'
import Message from '../../../../components/Common/Message'

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
            animalList: nextProps.animals.sort(function(a, b) {
                a = new Date(a.updatedAt)
                b = new Date(b.updatedAt)
                return a>b ? -1 : a<b ? 1 : 0
            }).slice(0, 8)
        })
    }

    renderBody() {
        if (this.props.isLoading) {
            return (
                <Loading />
            )
        } else if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the animal list. Please, try again later.</Message>
            )
        } else {
            if (this.state.animalList.length === 0) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> any animal in the database...</Message>
                )
            } else {
                return (
                    <>
                        <h2 className="subtitle bold">Latest pets</h2>
                        <Row>
                            {this.state.animalList.map((animal) =>
                                <AnimalCard
                                    key={animal._id}
                                    animal={animal}
                                />
                            )}
                        </Row>
                    </>
                )
            }

        }
    }
    render() {
        return (
            <div className="container_div">
                <h1 className="uppercase centered title">Welcome to <span className="important">adoptdontbuy <i className="fas fa-paw"/></span></h1>
                {this.renderBody()}
            </div>
        )
    }
}

export default Home
