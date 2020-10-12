import React from 'react'
import PropTypes from 'prop-types'
import './AnimalPicture.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'

const AnimalPicture = ({pictures, name}) => (
    <React.Fragment>
        {pictures.length === 1 ?
            <div className="animal-detail-picture-container">
                <img className="animal-detail-picture" alt={"Picture of " + name}
                     src={pictures[0]}/>
            </div>

            :
            <div className="animal-detail-picture-container">
                <Carousel showThumbs={false} autoplay>
                    {pictures.map(pic => (
                        <img key={pic} className="animal-detail-picture" alt={"Picture of " + name}
                             src={pic}/>
                    ))}
                </Carousel>
            </div>
        }
    </React.Fragment>
)

AnimalPicture.propTypes = {
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default AnimalPicture
