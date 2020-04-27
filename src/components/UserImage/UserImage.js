import React from 'react'
import PropTypes from 'prop-types'
import './UserImage.scss'

class UserImage extends React.Component {
    render() {
        return (
            <div className="subtitle-container">
                <h2 className="subtitle">{this.props.children}</h2>
            </div>
        )
    }
}

UserImage.propTypes = {
    children: PropTypes.any.isRequired
}

export default UserImage
