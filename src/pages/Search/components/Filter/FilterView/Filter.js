import React, {Component} from 'react'
import FilterForm from '../FilterForm'
import {input} from "../../../../../constants";
import PropTypes from 'prop-types'

const EMPTY_FILTER = {
    specie: undefined,
    gender: undefined,
    size: [],
    city: '',
    province: "-1",
    region: "-1",
    owner: undefined,
    age: [],
    castrated: false,
    vaccinated: false,
    alongWithDogs: false,
    alongWithCats: false,
    alongWithKids: false
}

class Filter extends Component {

    static propTypes = {
        filterAnimals: PropTypes.func.isRequired
    }

    state = {
        filter: EMPTY_FILTER
    }

    isNotEmpty = (element) => {
        if (Array.isArray(element))
            return element.length > 0

        return element !== "-1" && element !== "" && element !== false && element !== undefined && element !== "undefined"
    }

    callFilter = () => {
        let query = ''
        Object.entries(this.state.filter).map(element => {
            const value = element[1]
            const name = element[0]
           if (this.isNotEmpty(element[1])) {
                if (Array.isArray(value)) {
                    return value.map(el =>
                        query += name + "=" + el + "&"
                    )
                } else {
                    return (query += name + "=" + value + "&")
                }
            }
           return null
        })
        this.props.filterAnimals(query)
    }

    updateInput = (e) => {
        e.preventDefault()

        const inputName = e.target.name
        const inputValue = e.target.value
        const inputType = e.target.type

        if (Array.isArray(this.state.filter[inputName])) {
            const index = this.state.filter[inputName].indexOf(inputValue)
            if (index > -1) {
                this.state.filter[inputName].splice(index, 1)
            }
            this.setState({
                filter: {
                    ...this.state.filter,
                    [inputName]: index === -1 ? [...this.state.filter[inputName], inputValue] : this.state.filter[inputName]
                }
            }, this.callFilter)
        } else {
            const value = inputType === input.CHECKBOX ? e.target.checked : inputValue
            this.setState({
                filter: {
                    ...this.state.filter,
                    [inputName]: value
                }
            }, this.callFilter)
        }

    }

    deleteFilter = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const inputName = e.target.name

        if (Array.isArray(this.state.filter[inputName])) {
            const inputValue = e.target.value
            const index = this.state.filter[inputName].indexOf(inputValue)
            if (index > -1) {
                this.state.filter[inputName].splice(index, 1)
            }
            this.setState({
                filter: {
                    ...this.state.filter,
                    [inputName]: this.state.filter[inputName]
                }
            }, this.callFilter)
        } else {
            this.setState({
                filter: {
                    ...this.state.filter,
                    [e.target.name]: EMPTY_FILTER[e.target.name]
                }
            }, this.callFilter)
        }
    }

    clearFilter = (e) => {
        e.preventDefault()
        this.setState({
            filter: EMPTY_FILTER
        }, this.callFilter)
    }


    render() {
        return (
            <FilterForm
                filter={this.state.filter}
                clearFilter={this.clearFilter}
                updateInput={this.updateInput}
                isNotEmpty={this.isNotEmpty}
                deleteFilter={this.deleteFilter}
            />
        )
    }
}

export default Filter

