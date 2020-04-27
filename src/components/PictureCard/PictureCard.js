import React from 'react'
import PropTypes from 'prop-types'
import './PictureCard.scss'

class PictureCard extends React.Component {
    render() {
        return (
            <div className="picture-card-container">
                <img
                    className="picture-card"
                    alt={"Picture of " + this.props.name}
                    src={this.props.picture}
                />
            </div>
        )
    }
}

PictureCard.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
export default PictureCard
