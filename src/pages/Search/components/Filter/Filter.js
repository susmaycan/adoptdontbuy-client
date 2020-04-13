import React, {Component} from 'react'
import FilterForm from '../../../../components/FilterForm'

const EMPTY_FILTER = {
    specie: undefined,
    gender: undefined,
    size: undefined,
    city: undefined,
    province: undefined,
    region: undefined,
    owner: undefined,
    yearBorn: undefined,
    castrated: undefined,
    vaccinated: undefined,
    alongWithDogs: undefined,
    alongWithCats: undefined,
    alongWithKids: undefined
}

class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filter: EMPTY_FILTER
        }

        this.updateInput = this.updateInput.bind(this)
        this.callFilter = this.callFilter.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    callFilter() {
        let query = "";
        query += this.state.filter.size !== "-1" && this.state.filter.size !== undefined ? "size=" + this.state.filter.size + "&" : '';
        query += this.state.filter.gender !== "-1" && this.state.filter.gender !== undefined ? "gender=" + this.state.filter.gender + "&" : '';
        query += this.state.filter.province !== "-1" && this.state.filter.province !== undefined ? "province=" + this.state.filter.province + "&" : '';
        query += this.state.filter.region !== "-1" && this.state.filter.region !== undefined ? "region=" + this.state.filter.region + "&" : '';
        query += this.state.filter.city !== '' && this.state.filter.city !== undefined ? "city=" + this.state.filter.city + "&" : '';
        query += this.state.filter.specie !== "-1" && this.state.filter.specie !== undefined ? "specie=" + this.state.filter.specie + "&" : '';
        query += this.state.filter.yearBorn !== '' && this.state.filter.yearBorn !== undefined ? " yearBorn=" + this.state.filter.filter.yearBorn + "&" : '';
        query += this.state.filter.castrated !== false && this.state.filter.castrated !== undefined ? "castrated=" + this.state.filter.castrated + "&" : '';
        query += this.state.filter.vaccinated !== false && this.state.filter.vaccinated !== undefined ? "vaccinated=" + this.state.filter.vaccinated + "&" : '';
        query += this.state.filter.alongWithDogs !== false && this.state.filter.alongWithDogs !== undefined ? "alongWithDogs=" + this.state.filter.alongWithDogs + "&" : '';
        query += this.state.filter.alongWithCats !== false && this.state.filter.alongWithCats !== undefined ? "alongWithCats=" + this.state.filter.alongWithCats + "&" : '';
        query += this.state.filter.alongWithKids !== false && this.state.filter.alongWithKids !== undefined ? "alongWithKids=" + this.state.filter.alongWithKids + "&" : '';
        this.props.filterAnimals(query)
    }

    updateInput(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            filter: {
                ...this.state.filter,
                [e.target.name]: value
            }
        }, this.callFilter)
    }

    clearFilter() {
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
            />
        )
    }
}

export default Filter

