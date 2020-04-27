import React from 'react'
import {
    Col,
    Form
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import Select from '../../../../../../components/Select'
import {Translate, I18n} from 'react-redux-i18n'
import './FilterForm.scss'
import Subtitle from '../../../../../../components/Subtitle'
import Collapse from '../Collapse'
import ButtonGroup from '../../../../../../components/ButtonGroup'
import ProvinceSelect from '../../../../../../components/ProvinceSelect'
import {filterElements} from '../../../../../../constants'
import Checkboxes from '../../../../../../components/Checkboxes'
import FilterBadgeList from '../FilterBadgeList/FilterBadgeList'

const FilterForm = ({filter, updateInput, clearFilter, isNotEmpty, deleteFilter}) => (

    <div className="filter-container">
        <Form>
            <div className="filter-subtitle">
                <Subtitle>
                    <i className="fas fa-filter"/>
                    {' '}
                    <Translate value='filter.title'/>
                </Subtitle>
            </div>
            <FilterBadgeList
                filter={filter}
                deleteFilter={deleteFilter}
                isNotEmpty={isNotEmpty}
            />

            <div className="centered">
                <a href="#" onClick={clearFilter}><Translate value='filter.clearFilters'/></a>
            </div>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridSpecie">
                    <Form.Label><Translate value='animal.specie'/></Form.Label>
                    <ButtonGroup
                        value={filter.specie}
                        name={filterElements.SPECIE}
                        handleChange={updateInput}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridGenre">
                    <Form.Label><Translate value='animal.gender'/></Form.Label>
                    <ButtonGroup
                        value={filter.gender}
                        name={filterElements.GENDER}
                        handleChange={updateInput}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridSize">
                    <Form.Label><Translate value='animal.size'/></Form.Label>
                    <Checkboxes
                        name={filterElements.SIZE}
                        handleChange={updateInput}
                        value={filter.size}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridYearBorn">
                    <Form.Label><Translate value='animal.age'/></Form.Label>
                    <Checkboxes
                        name={filterElements.AGE}
                        handleChange={updateInput}
                        value={filter.age}
                    />
                </Form.Group>
            </Form.Row>
            <Collapse
                name='location'
            >
                <div>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridRegion">
                            <Form.Label><Translate value='animal.region'/></Form.Label>
                            <Select
                                value={filter.region}
                                name={filterElements.REGION}
                                handleChange={updateInput}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridProvince">
                            <Form.Label><Translate value='animal.province'/></Form.Label>
                            <ProvinceSelect
                                handleChange={updateInput}
                                region={filter.region}
                                province={filter.province}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={updateInput} as={Col} controlId="formGridCity">
                            <Form.Label><Translate value='animal.city'/></Form.Label>
                            <Form.Control value={filter.city} name={filterElements.CITY}>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </div>
            </Collapse>
            <Collapse
                name='optional'
            >
                <div>
                    <Form.Row>
                        <Form.Group onChange={updateInput} as={Col} controlId="formGridCastrated">
                            <Form.Check
                                type="checkbox"
                                label={I18n.t('animal.castrated')}
                                name={filterElements.CASTRATED}
                                checked={filter.castrated}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={updateInput} as={Col} controlId="formGridVaccinated">
                            <Form.Check
                                name={filterElements.VACCINATED}
                                label={I18n.t('animal.vaccinated')}
                                type="checkbox"
                                checked={filter.vaccinated}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithDogs">
                            <Form.Check
                                label={I18n.t('animal.alongWithDogs')}
                                name={filterElements.ALONG_WITH_DOGS}
                                type="checkbox"
                                checked={filter.alongWithDogs}
                            >
                            </Form.Check>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithCats">
                            <Form.Check
                                label={I18n.t('animal.alongWithCats')}
                                name={filterElements.ALONG_WITH_CATS}
                                type="checkbox"
                                checked={filter.alongWithCats}
                            >
                            </Form.Check>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithKids">
                            <Form.Check
                                label={I18n.t('animal.alongWithKids')}
                                name={filterElements.ALONG_WITH_KIDS}
                                type="checkbox"
                                checked={filter.alongWithKids}
                            >
                            </Form.Check>
                        </Form.Group>
                    </Form.Row>
                </div>
            </Collapse>
        </Form>
    </div>
)

FilterForm.propTypes = {
    filter: PropTypes.shape({
        specie: PropTypes.string,
        gender: PropTypes.string,
        size: PropTypes.arrayOf(PropTypes.string),
        city: PropTypes.string,
        province: PropTypes.string,
        region: PropTypes.string,
        owner: PropTypes.string,
        age: PropTypes.arrayOf(PropTypes.string),
        castrated: PropTypes.bool,
        vaccinated: PropTypes.bool,
        alongWithDogs: PropTypes.bool,
        alongWithCats: PropTypes.bool,
        alongWithKids: PropTypes.bool
    }).isRequired,
    updateInput: PropTypes.func.isRequired,
    isNotEmpty: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired
}
export default FilterForm
