import React from 'react'
import { Link } from 'react-router-dom'
import Gender from '../Common/Gender'
import Location from '../Common/Location'
import Picture from '../Common/Picture'
import PropTypes from 'prop-types'

const AnimalCard = ({ animal }) => (
    <Link className="" to={{ pathname: `/animal/${animal._id}` }}>
        <div key={animal._id} className="animal_container_recent centered">
            <Picture
                name={animal.name}
                picture={animal.picture[0]}
            />
            <div className="animalResultInfo">
                <h3 className="subtitle centered bold animal_name_result">{animal.name}</h3>
                <Gender
                    gender={animal.gender}
                />
                <Location
                    province={animal.province}
                    region={animal.region}
                />
            </div>
        </div>
    </Link>
)
AnimalCard.propTypes = {
    animal: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        specie: PropTypes.string.isRequired,
        breed: PropTypes.string,
        gender: PropTypes.string,
        size: PropTypes.string,
        yearBorn: PropTypes.string,
        country: PropTypes.string,
        region: PropTypes.string,
        province: PropTypes.string,
        city: PropTypes.string,
        about: PropTypes.string,
        castrated: PropTypes.bool,
        vaccinated: PropTypes.bool,
        alongWithDogs: PropTypes.bool,
        alongWithCats: PropTypes.bool,
        alongWithKids: PropTypes.bool,
        socialLevel: PropTypes.number,
        traumaLevel: PropTypes.number,
        energyLevel: PropTypes.number,
        picture: PropTypes.arrayOf(PropTypes.string),
        status: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        __v: PropTypes.any,
        owner: PropTypes.string.isRequired
    }).isRequired
}
export default AnimalCard
