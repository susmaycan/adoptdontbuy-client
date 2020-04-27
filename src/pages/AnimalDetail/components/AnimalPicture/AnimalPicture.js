import React from 'react'
import PropTypes from 'prop-types'
import './AnimalPicture.scss'
import Carousel from "react-bootstrap/Carousel";

class AnimalPicture extends React.Component {
    render() {
        const {pictures, name} = this.props
        if (pictures !== undefined) {
            if (pictures.length === 1) {
                return (
                    <div className="animal-detail-picture-container">
                        <img className="animal-detail-picture" alt={"Picture of " + name}
                             src={pictures[0]}/>
                    </div>
                )
            } else {
                return (
                    <div className="animal-detail-picture-container">
                        <Carousel>
                            {pictures.map(pic => (
                                <Carousel.Item>
                                    <img className="animal-detail-picture" alt={"Picture of " + name}
                                         src={pic}/>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                )
            }
        } else {
            return null
        }
    }
}

AnimalPicture.propTypes = {
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default AnimalPicture
