import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './FilterBadge.scss'
import LocationElement from '../../../../../../../components/Location/LocationElement'
import {filterElements} from '../../../../../../../constants'

class FilterBadge extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        deleteFilter: PropTypes.func.isRequired
    }

    renderContentBadge = () => {
        const {name, value} = this.props

        switch (name) {
            case filterElements.REGION:
            case filterElements.PROVINCE:
                return (
                    <LocationElement name={name} value={value}/>
                )
            case filterElements.ALONG_WITH_KIDS:
            case filterElements.ALONG_WITH_CATS:
            case filterElements.ALONG_WITH_DOGS:
            case filterElements.CASTRATED:
            case filterElements.VACCINATED:
                return (
                    <Translate value={'animal.' + name}/>
                )
            default:
                return (
                    <Translate value={name + '.' + value}/>
                )
        }

    }

    render() {
        const {name, value, deleteFilter} = this.props
        return (
            <button
                key={value}
                name={name}
                value={value}
                className="filter-element"
                onClick={deleteFilter}>
                {this.renderContentBadge()}
                {' '}
                <i className="fas fa-times-circle"/>
            </button>
        )
    }
}
export default FilterBadge
