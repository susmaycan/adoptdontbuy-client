import React from 'react'
import PropTypes from 'prop-types'
import {ButtonGroup, Checkboxes, ProvinceSelect, Select, Subtitle} from '../../../../../../components'
import {Translate} from 'react-redux-i18n'
import './FilterForm.scss'
import {filterElements} from '../../../../../../constants'
import FilterBadgeList from '../FilterBadgeList'
import Collapse from '../Collapse'

const FilterForm = ({filter, updateInput, clearFilter, isNotEmpty, deleteFilter}) => (

    <div className="filter-container">
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
            <a href="/#" onClick={clearFilter}><Translate value='filter.clearFilters'/></a>
        </div>
        <form>
            <div className="field">
                <label htmlFor={filterElements.SPECIE} className="label"><Translate value='animal.specie'/></label>
                <div className="control">
                    <ButtonGroup
                        value={filter.specie}
                        name={filterElements.SPECIE}
                        handleChange={updateInput}
                    />
                </div>
            </div>

            <div className="field">
                <label htmlFor={filterElements.GENDER} className="label"><Translate value='animal.gender'/></label>
                <div className="control">
                    <ButtonGroup
                        value={filter.gender}
                        name={filterElements.GENDER}
                        handleChange={updateInput}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor={filterElements.SIZE} className="label"><Translate value='animal.size'/></label>
                <div className="control">
                    <Checkboxes
                        name={filterElements.SIZE}
                        handleChange={updateInput}
                        value={filter.size}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor={filterElements.AGE} className="label"><Translate value='animal.age'/></label>
                <div className="control">
                    <Checkboxes
                        name={filterElements.AGE}
                        handleChange={updateInput}
                        value={filter.age}
                    />
                </div>
            </div>
            <Collapse
                name='location'
            >
                <div>
                    <div className="field">
                        <label htmlFor={filterElements.REGION} className="label"><Translate
                            value='animal.region'/></label>
                        <div className="control">
                            <Select
                                value={filter.region}
                                name={filterElements.REGION}
                                handleChange={updateInput}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor={filterElements.PROVINCE} className="label"><Translate value='animal.province'/></label>
                        <div className="control">
                            <ProvinceSelect
                                handleChange={updateInput}
                                region={filter.region}
                                province={filter.province}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor={filterElements.CITY} className="label"><Translate value='animal.city'/></label>
                        <div className="control">
                            <input onChange={updateInput} value={filter.city} name={filterElements.CITY}
                                   className="input" type="text"/>
                        </div>
                    </div>
                </div>
            </Collapse>
            <Collapse
                name='optional'
            >
                <div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    onChange={updateInput}
                                    checked={filter.castrated}
                                    name={filterElements.CASTRATED}
                                    type="checkbox"/>
                                &nbsp;<Translate value="animal.castrated"/>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    onChange={updateInput}
                                    checked={filter.vaccinated}
                                    name={filterElements.VACCINATED}
                                    type="checkbox"/>
                                &nbsp;<Translate value="animal.vaccinated"/>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    onChange={updateInput}
                                    checked={filter.alongWithDogs}
                                    name={filterElements.ALONG_WITH_DOGS}
                                    type="checkbox"/>
                                &nbsp;<Translate value="animal.alongWithDogs"/>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    onChange={updateInput}
                                    checked={filter.alongWithCats}
                                    name={filterElements.ALONG_WITH_CATS}
                                    type="checkbox"/>
                                &nbsp;<Translate value="animal.alongWithCats"/>
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input
                                    onChange={updateInput}
                                    checked={filter.alongWithKids}
                                    name={filterElements.ALONG_WITH_KIDS}
                                    type="checkbox"/>
                                &nbsp;<Translate value="animal.alongWithKids"/>
                            </label>
                        </div>
                    </div>
                </div>
            </Collapse>
        </form>
    </div>
)

FilterForm.propTypes = {
    filter: PropTypes.object.isRequired,
    updateInput: PropTypes.func.isRequired,
    isNotEmpty: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired
}
export default FilterForm
