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
                                    key={element[0]}
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
    filter: PropTypes.object.isRequired,
    isNotEmpty: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired
}

export default FilterBadgeList
