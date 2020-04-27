import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

class Title extends React.Component {
    render() {
        return (
            <div className="title-container">
                <h1 className="title is-size-1-desktop is-size-2-mobile is-size-2-tablet">
                    {this.props.children}
                </h1>
            </div>
        )
    }
}

Title.propTypes = {
    children: PropTypes.any.isRequired
}
export default Title
