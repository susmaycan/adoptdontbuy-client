import React from 'react'
import PropTypes from 'prop-types'
import './Subtitle.scss'

const Subtitle = ({children}) => (
    <div className="subtitle-container has-text-centered-mobile">
        <h2 className="subtitle is-size-3">{children}</h2>
    </div>
)
Subtitle.propTypes = {
    children: PropTypes.any.isRequired
}

export default Subtitle
