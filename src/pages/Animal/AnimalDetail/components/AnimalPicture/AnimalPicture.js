import React from 'react'
import PropTypes from 'prop-types'
import './AnimalPicture.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'

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
                        <Carousel showThumbs={false} autoplay>
                            {pictures.map(pic => (
                                <img key={pic} className="animal-detail-picture" alt={"Picture of " + name}
                                     src={pic}/>
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
