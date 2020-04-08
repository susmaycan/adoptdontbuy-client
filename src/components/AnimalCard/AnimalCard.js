import React from 'react'
import { Link } from 'react-router-dom'
import Gender from '../Common/Gender'
import Location from '../Common/Location'
import Picture from '../Common/Picture'

const AnimalCard = ({ animal }) => (
    <Link className="" to={{ pathname: `/animal/${animal._id}` }}>
        <div key={animal._id} className="animal_container_recent centered">
            <Picture
                name={animal.name}
                picture={animal.picture}
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

export default AnimalCard