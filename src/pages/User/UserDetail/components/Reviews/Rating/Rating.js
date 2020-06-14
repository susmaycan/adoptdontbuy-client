import React from 'react'
import './Rating.scss'
import PropTypes from 'prop-types'

class Rating extends React.Component {

    renderRating() {
        let ratings = []
        for (let i = 0; i < this.props.value; i++) {
            ratings.push(<i key={i} className="fas fa-star rating"/>)
        }
        return ratings
    }

    render() {
        return (
            <span>{this.renderRating()}</span>
        )
    }
}

Rating.propTypes = {
    value: PropTypes.number.isRequired
}
export default Rating
