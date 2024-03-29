import React, {Component} from 'react'
import {Box, Error, Loading, Message, Title} from '../../../../components'
import Filter from '../Filter'
import {Translate} from 'react-redux-i18n'
import {codeError} from '../../../../constants'
import ResultList from '../ResultList'
import PropTypes from 'prop-types'

class Search extends Component {

    static propTypes = {
        animalList: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        filterAnimals: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.callFilter = this.callFilter.bind(this)
    }

    componentDidMount() {
        this.props.filterAnimals('')
    }

    callFilter(query) {
        this.props.filterAnimals(query)
    }

    renderBody() {
        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        }

        if (this.props.error) {
            return (
                <Error code={codeError.SERVER_UNAVAILABLE}/>
            )
        }

        if (this.props.animalList.length === 0) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> any animal that matches your query.</Message>
            )
        }

        return (
            <ResultList
                animalList={this.props.animalList}
            />
        )

    }

    render() {
        return (
            <Box>
                <div className="columns">
                    <div className="column is-3 is-12-mobile">
                        <Filter
                            filterAnimals={this.callFilter}
                        />
                    </div>
                    <div className="column is-9 is-full-mobile">
                        <div className="columns is-centered">
                            <Title>
                                <i className="fas fa-search"/>
                                {' '}
                                <Translate value="search.title"/>
                            </Title>
                        </div>
                        {this.renderBody()}
                    </div>
                </div>
            </Box>
        )
    }
}

export default Search
