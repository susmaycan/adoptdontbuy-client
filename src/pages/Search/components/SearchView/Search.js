import React, {Component} from 'react'
import {
    Col,
    Row,
} from 'react-bootstrap'
import Loading from '../../../../components/Loading'
import Message from '../../../../components/Message'
import Filter from '../Filter'
import {Translate} from 'react-redux-i18n'
import Title from '../../../../components/Title'
import Error from '../../../../components/Error'
import {codeError} from '../../../../constants'
import ResultList from '../ResultList'
import Container from '../../../../components/Container'

class Search extends Component {

    constructor(props) {
        super(props)
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
                <Error code={codeError.SERVER_UNAVAILABLE}/>
            )
        } else if (this.props.animalList.length === 0) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> any animal that matches your query.</Message>
            )
        } else {
            return (
                <ResultList
                    animalList={this.props.animalList}
                />
            )
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={3}>
                        <Filter
                            filterAnimals={this.callFilter}
                        />
                    </Col>
                    <Col xs={9}>
                        <Row className="justify-content-center">
                            <Title>
                                <i className="fas fa-search"/>
                                {' '}
                                <Translate value="search.title"/>
                            </Title>
                        </Row>
                        <Row>
                            {this.renderBody()}
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search
