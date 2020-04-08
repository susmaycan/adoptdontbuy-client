import React, {Component} from 'react'
import {
    Col,
    Row,
} from 'react-bootstrap'
import AnimalCard from '../../../../components/AnimalCard'
import Loading from '../../../../components/Common/Loading'
import Message from '../../../../components/Common/Message'
import Filter from '../Filter'

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            animalList: []
        }

        this.callFilter = this.callFilter.bind(this)

    }

    componentDidMount() {
        this.props.filterAnimals({})
    }

    callFilter(query) {
        this.props.filterAnimals(query)
    }

    renderBody() {
        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        } else if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the animal list. Please,
                    try again later.</Message>
            )
        } else if (this.props.animalList.length === 0) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> any animal that matches your query.</Message>
            )
        } else {
            return (
                this.props.animalList.map((animal) =>
                    <AnimalCard
                        key={animal._id}
                        animal={animal}
                    />
                )
            )
        }
    }

    render() {
        return (
            <div className="container_div">
                <div className="centered">
                    <h1 className="title"><i className="fas fa-search"/> Search</h1>
                </div>
                <Row>
                    <Col xs={3}>
                        <Filter
                            filterAnimals={this.callFilter}
                        />
                    </Col>
                    <Col xs={9}>
                        <Row>
                            {this.renderBody()}
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Search
