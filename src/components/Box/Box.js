import React from 'react'
import PropTypes from 'prop-types'
import './Box.scss'

const Box = ({ children, center }) => (
    <div className={center ? "block-container centered": "block-container"}>
        {children}
    </div>
)
Box.propTypes = {
    children: PropTypes.any.isRequired,
    center: PropTypes.bool
}
export default Box
