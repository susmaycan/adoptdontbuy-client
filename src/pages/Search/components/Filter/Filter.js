import React, {Component} from 'react'
import {
    Col,
    Form
} from 'react-bootstrap'
import {
    ccaa,
    provinces
} from '../../../../constants'

class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            specie: '',
            gender: '',
            size: '',
            city: '',
            province: '',
            region: '',
            owner: '',
            yearBorn: '',
            castrated: '',
            vaccinated: '',
            alongWithDogs: '',
            alongWithCats: '',
            alongWithKids: '',
        }
        this.updateInput = this.updateInput.bind(this)
        this.callFilter = this.callFilter.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    // updateProvinces(e) {
    //     const filtered_prov = provinces.filter((prov) => {
    //         return prov.autonomia_id.includes(e.target.value);
    //     });
    //     setLocation({
    //         ccaa: ccaa,
    //         provinces: filtered_prov
    //     });
    // }

    callFilter() {
        let query = "";
        query += this.state.size !== "-1" && this.state.size !== undefined ? "size=" + this.state.size + "&" : '';
        query += this.state.gender !== "-1" && this.state.gender !== undefined ? "gender=" + this.state.gender + "&" : '';
        query += this.state.province !== "-1" && this.state.province !== undefined ? "province=" + this.state.province + "&" : '';
        query += this.state.region !== "-1" && this.state.region !== undefined ? "region=" + this.state.region + "&" : '';
        query += this.state.city !== '' && this.state.city !== undefined ? "city=" + this.state.city + "&" : '';
        query += this.state.specie !== "-1" && this.state.specie !== undefined ? "specie=" + this.state.specie + "&" : '';
        query += this.state.yearBorn !== '' && this.state.yearBorn !== undefined ? " yearBorn=" + this.state.yearBorn + "&" : '';
        query += this.state.castrated !== false && this.state.castrated !== undefined ? "castrated=" + this.state.castrated + "&" : '';
        query += this.state.vaccinated !== false && this.state.vaccinated !== undefined ? "vaccinated=" + this.state.vaccinated + "&" : '';
        query += this.state.alongWithDogs !== false && this.state.alongWithDogs !== undefined ? "alongWithDogs=" + this.state.alongWithDogs + "&" : '';
        query += this.state.alongWithCats !== false && this.state.alongWithCats !== undefined ? "alongWithCats=" + this.state.alongWithCats + "&" : '';
        query += this.state.alongWithKids !== false && this.state.alongWithKids !== undefined ? "alongWithKids=" + this.state.alongWithKids + "&" : '';
        this.props.filterAnimals(query)
    }

    updateInput(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        }, this.callFilter)
    }

    clearFilter() {
        this.setState({
            ...this.state,
            specie: '',
            gender: '',
            size: '',
            city: '',
            province: '',
            region: '',
            owner: '',
            yearBorn: '',
            castrated: '',
            vaccinated: '',
            alongWithDogs: '',
            alongWithCats: '',
            alongWithKids: '',
        }, this.callFilter)
    }


    render() {
        return (
            <div className="SearchFilter">
                <Form>
                    <h2 className="important title_filter"><i className="fas fa-filter"/>FILTERS</h2>
                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridSpecie">
                            <Form.Label>Specie</Form.Label>
                            <Form.Control value={this.state.specie} name="specie" as="select">
                                <option value="-1">Choose...</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridGenre">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control value={this.state.gender} name="gender" as="select">
                                <option value="-1">Choose...</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridSize">
                            <Form.Label>Size</Form.Label>
                            <Form.Control value={this.state.size} name="size" as="select">
                                <option value="-1">Choose...</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="big">Big</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridYearBorn">
                            <Form.Label>Year Born</Form.Label>
                            <Form.Control type="number" value={this.state.yearBorn} name="yearBorn"
                                          placeholder="2019, 2018..."/>
                        </Form.Group>
                    </Form.Row>
                    <br/>
                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridRegion">
                            <Form.Label>Region</Form.Label>
                            <Form.Control value={this.state.region} name="region" as="select">
                                <option value="-1">Select one</option>
                                {ccaa.map(region =>
                                    <option key={region.autonomia_id}
                                            value={region.autonomia_id}>{region.nombre}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridProvince">
                            <Form.Label>Province</Form.Label>
                            <Form.Control value={this.state.province} name="province" as="select">
                                <option value="-1">Select one</option>
                                {provinces.map(prov =>
                                    <option key={prov.id} value={prov.id}>{prov.nm}</option>
                                )};
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={this.state.city} name="city">
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridCastrated">
                            <Form.Check
                                type="checkbox"
                                label="Castrated"
                                name="castrated"
                                checked={this.state.castrated}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridVaccinated">
                            <Form.Check
                                name="vaccinated"
                                label="Vaccinated"
                                type="checkbox"
                                checked={this.state.vaccinated}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridAlongWithDogs">
                            <Form.Check
                                label="Along with dogs"
                                name="alongWithDogs"
                                type="checkbox"
                                checked={this.state.alongWithDogs}
                            >
                            </Form.Check>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridAlongWithCats">
                            <Form.Check
                                label="Along with cats"
                                name="alongWithCats"
                                type="checkbox"
                                checked={this.state.alongWithCats}
                            >
                            </Form.Check>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={this.updateInput} as={Col} controlId="formGridAlongWithKids">
                            <Form.Check
                                label="Along with kids"
                                name="alongWithKids"
                                type="checkbox"
                                checked={this.state.alongWithKids}
                            >
                            </Form.Check>
                        </Form.Group>
                    </Form.Row>
                    <div className="centered">
                        <button onClick={this.clearFilter} className="button" type="reset">Clear filters</button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Filter

