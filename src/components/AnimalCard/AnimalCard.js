import React from 'react'
import {Link} from 'react-router-dom'
import {Gender, Location, PictureCard} from '../../components'
import PropTypes from 'prop-types'
import './AnimalCard.scss'
import Favourite from '../../pages/Animal/Favourite'
import {isAdopted, isOwner} from '../../utils/Functions'
import MarkAdopt from '../../pages/Animal/MarkAdopt'
import MarkReserved from '../../pages/Animal/MarkReserved'
import DeleteAnimal from '../../pages/Animal/DeleteAnimal'

const AnimalCard = ({animal, user, isLoggedIn, editMode}) => (
    <div className="animal-card-container">
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
            {!isAdopted(animal) &&
            <>
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
            </>
            }
            <div className="level-item">
                <DeleteAnimal>
                    <span className="icon">
                       <i className="fas fa-trash-alt"/>
                    </span>
                </DeleteAnimal>
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
    animal: PropTypes.object.isRequired,
    user: PropTypes.object,
    editMode: PropTypes.bool,
    isLoggedIn: PropTypes.bool
}
export default AnimalCard
