import React from 'react'
import {
    Col,
    Form
} from 'react-bootstrap'
import ProvinceSelect from '../Common/ProvinceSelect'
import PropTypes from 'prop-types'
import Select from '../Common/Select'

const FilterForm = ({filter, updateInput, clearFilter}) => (

    <div className="SearchFilter">
        <Form>
            <h2 className="important title_filter"><i className="fas fa-filter"/>FILTERS</h2>
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridSpecie">
                    <Form.Label>Specie</Form.Label>
                    <Select
                        value={filter.specie}
                        name='specie'
                        handleChange={updateInput}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridGenre">
                    <Form.Label>Gender</Form.Label>
                    <Select
                        value={filter.gender}
                        name='gender'
                        handleChange={updateInput}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridSize">
                    <Form.Label>Size</Form.Label>
                    <Select
                        value={filter.size}
                        name='size'
                        handleChange={updateInput}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridYearBorn">
                    <Form.Label>Year Born</Form.Label>
                    <Form.Control type="number" value={filter.yearBorn} name="yearBorn"
                                  placeholder="2019, 2018..."/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridRegion">
                    <Form.Label>Region</Form.Label>
                    <Select
                        value={filter.region}
                        name='region'
                        handleChange={updateInput}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridProvince">
                    <Form.Label>Province</Form.Label>
                    <ProvinceSelect
                        handleChange={updateInput}
                        region={filter.region}
                        province={filter.province}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={filter.city} name="city">
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridCastrated">
                    <Form.Check
                        type="checkbox"
                        label="Castrated"
                        name="castrated"
                        checked={filter.castrated}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridVaccinated">
                    <Form.Check
                        name="vaccinated"
                        label="Vaccinated"
                        type="checkbox"
                        checked={filter.vaccinated}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithDogs">
                    <Form.Check
                        label="Along with dogs"
                        name="alongWithDogs"
                        type="checkbox"
                        checked={filter.alongWithDogs}
                    >
                    </Form.Check>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithCats">
                    <Form.Check
                        label="Along with cats"
                        name="alongWithCats"
                        type="checkbox"
                        checked={filter.alongWithCats}
                    >
                    </Form.Check>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithKids">
                    <Form.Check
                        label="Along with kids"
                        name="alongWithKids"
                        type="checkbox"
                        checked={filter.alongWithKids}
                    >
                    </Form.Check>
                </Form.Group>
            </Form.Row>
            <div className="centered">
                <button onClick={clearFilter} className="button" type="reset">Clear filters</button>
            </div>
        </Form>
    </div>
)

FilterForm.propTypes = {
    filter:PropTypes.shape({
        specie: PropTypes.string,
        gender: PropTypes.string,
        size: PropTypes.string,
        city: PropTypes.string,
        province: PropTypes.string,
        region: PropTypes.string,
        owner: PropTypes.string,
        yearBorn: PropTypes.string,
        castrated: PropTypes.bool,
        vaccinated: PropTypes.bool,
        alongWithDogs: PropTypes.bool,
        alongWithCats: PropTypes.bool,
        alongWithKids: PropTypes.bool
    }).isRequired,
    updateInput: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired
}
export default FilterForm
