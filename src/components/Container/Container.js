import React from 'react'
import PropTypes from 'prop-types'
import './Container.scss'

const Container = ({ children, center }) => (
    <div className={center ? "block-container centered": "block-container"}>
        {children}
    </div>
)
Container.propTypes = {
    children: PropTypes.any.isRequired,
    center: PropTypes.bool
}
export default Container
