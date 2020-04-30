import React from 'react'
import './ResultList.scss'
import AnimalCard from "../../../../components/AnimalCard";
import PropTypes from 'prop-types'

const ResultList = ({animalList}) => (
    <div className="animal-list-container">
        <div className="columns is-centered is-multiline is-mobile">
            {animalList.map((animal) =>
                <div  key={animal._id} className="column is-narrow">
                    <AnimalCard
                        animal={animal}
                    />
                </div>
            )}
        </div>
    </div>
)

ResultList.propTypes = {
    animalList: PropTypes.arrayOf(PropTypes.shape({
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
    }).isRequired).isRequired
}

export default ResultList
