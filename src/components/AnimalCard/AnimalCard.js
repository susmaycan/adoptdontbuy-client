import React from 'react'
import {Link} from 'react-router-dom'
import {Gender, Location, PictureCard} from '../../components'
import PropTypes from 'prop-types'
import './AnimalCard.scss'
import Favourite from '../../pages/Animal/Favourite'
import {isOwner} from "../../utils/Functions";
import MarkAdopt from '../../pages/Animal/MarkAdopt'
import MarkReserved from '../../pages/Animal/MarkReserved'

const AnimalCard = ({animal, user, isLoggedIn, editMode}) => (
    <div key={animal._id} className="animal-card-container">
        <Link to={{pathname: `/animal/${animal._id}`}}>
            <PictureCard
                name={animal.name}
                picture={animal.picture !== undefined ? animal.picture[0] : 'https://api.adorable.io/avatars/250/' + animal.name}
            />
            <div className="animal-info-card">
                <h3 className="animal-name-card">{animal.name}</h3>
                <Gender
                    gender={animal.gender}
                />
                <Location
                    province={animal.province}
                    region={animal.region}
                />
            </div>
        </Link>

        {(editMode && isLoggedIn && isOwner(user, animal.owner)) &&
        <div className="level">
            <div className="level-item">
                <MarkAdopt animal={animal}/>
            </div>
            <div className="level-item">
                <MarkReserved animal={animal}/>
            </div>
            <div className="level-item">
                <Link className="button is-white"
                      to={`/updateAnimal/${animal._id}`}>
                        <span className="icon">
                            <i className="fas fa-edit"/>
                        </span>
                </Link>
            </div>
            <div className="level-item">
                <button className="button is-white">
                        <span className="icon">
                           <i className="fas fa-trash-alt"/>
                        </span>
                </button>
            </div>
        </div>
        }

        {!editMode && isLoggedIn &&
        <div className="level">
            <div className="level-left">
            </div>
            <div className="level-right">
                <div className="level-item">
                    <Favourite animal={animal}/>
                </div>
            </div>
        </div>
        }
    </div>
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
    }).isRequired,
    addFavourite: PropTypes.func,
    editMode: PropTypes.bool
}
export default AnimalCard
