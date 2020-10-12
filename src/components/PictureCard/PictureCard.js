import React from 'react'
import PropTypes from 'prop-types'
import './PictureCard.scss'

const PictureCard = ({name, picture}) => (
    <div className="picture-card-container">
        <img
            className="picture-card"
            alt={"Picture of " + name}
            src={picture}
        />
    </div>
)
PictureCard.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
export default PictureCard
