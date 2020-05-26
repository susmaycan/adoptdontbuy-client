import React from 'react'
import {Row} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './FilterBadgeList.scss'
import FilterBadge from "../FilterBadge";


const FilterBadgeList = ({filter, isNotEmpty, deleteFilter}) => (
    <div className="filter-list">
        <Row>
            {Object.entries(filter).map(element => {
                if (isNotEmpty(element[1])) {
                    if (Array.isArray(element[1])) {
                        return (
                            element[1].map(el =>
                                <FilterBadge
                                    name={element[0]}
                                    value={el}
                                    deleteFilter={deleteFilter}
                                />))
                    } else {
                        return (
                            <FilterBadge
                                name={element[0]}
                                value={element[1]}
                                deleteFilter={deleteFilter}
                            />)
                    }
                }
                return null
            })}
        </Row>
    </div>
)

FilterBadgeList.propTypes = {
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
    isNotEmpty: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired
}
export default FilterBadgeList
