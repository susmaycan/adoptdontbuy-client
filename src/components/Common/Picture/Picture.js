import React from 'react'
import PropTypes from 'prop-types'

class Picture extends React.Component {

    render() {
        return (
            <div className="profile_pic">
                <img className="home_image" alt={"Picture of " + this.props.name} src={this.props.picture} />
            </div>
        )
    }
}
Picture.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
export default Picture
