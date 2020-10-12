import React from 'react'
import {Translate} from 'react-redux-i18n'
import './Badge.scss'
import PropTypes from 'prop-types'

const Badge = ({elements}) => (
    <div className="badge-list">
        {
            elements.map(element => {
                if (element.value) {
                    return (
                        <span className="tag badge-custom is-success" key={element.name}><Translate
                            value={'animal.' + element.name}/>&nbsp;<i className="fas fa-check-circle"/></span>
                    )
                } else {
                    return (
                        <span className="tag badge-custom is-danger" key={element.name}><Translate
                            value={'animal.' + element.name}/>&nbsp;<i className="fas fa-times-circle"/></span>
                    )
                }
            })
        }
    </div>
)
Badge.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.bool
    })).isRequired
}

export default Badge
