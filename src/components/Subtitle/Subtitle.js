import React from 'react'
import PropTypes from 'prop-types'
import './Subtitle.scss'

class Subtitle extends React.Component {
    render() {
        return (
            <div className="subtitle-container">
                <h2 className="subtitle is-size-3">{this.props.children}</h2>
            </div>
        )
    }
}

Subtitle.propTypes = {
    children: PropTypes.any.isRequired
}

export default Subtitle
