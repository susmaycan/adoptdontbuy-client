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
    animalList: PropTypes.array.isRequired
}

export default ResultList
