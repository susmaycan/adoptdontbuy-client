import React from 'react'
import PropTypes from 'prop-types'
import {Button, PictureCard} from '../../../../components'
import {Translate} from "react-redux-i18n";
import {buttonTypes} from "../../../../constants";

const EditPictures = ({animal, uploadPictures, deletePicture}) => (
    <div>
        <div className="columns is-centered">
            <div className="column is-narrow">
                <div className="field is-centered">
                    <div className="file is-boxed">
                        <label className="file-label">
                            <input
                                className="file-input"
                                type="file"
                                name="picture"
                                required
                                multiple="multiple"
                                onChange={uploadPictures}
                            />
                            <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"/>
                          </span>
                          <span className="file-label">
                            Choose a file…
                          </span>
                        </span>
                        </label>
                    </div>
                    <p className="help">You can add multiple pictures.</p>
                </div>
            </div>
        </div>
        <div className="columns is-multiline is-mobile is-centered">
            {animal.picture.map((pic) => (
                <div key={pic} className="column is-narrow">
                    <PictureCard name={animal.name} picture={pic}/>
                    <button onClick={() => deletePicture(pic)} className="button danger"><i
                        className="fas fa-trash-alt"/>
                    </button>
                </div>
            ))}
        </div>
        <div className="has-text-centered">
            <Button
                url={`/animal/${animal._id}`}
            >
                <Translate value={buttonTypes.FINISH}/>
            </Button>
        </div>
    </div>
)
EditPictures.propTypes = {
    animal: PropTypes.shape({
        name: PropTypes.string,
        specie: PropTypes.string,
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
        owner: PropTypes.oneOfType([
            PropTypes.shape({
                picture: PropTypes.string,
                _id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                inAdoption: PropTypes.arrayOf(PropTypes.string),
                adoptedByOthers: PropTypes.arrayOf(PropTypes.string),
                reserved: PropTypes.arrayOf(PropTypes.string),
                favourites: PropTypes.arrayOf(PropTypes.string),
                adoptedByMe: PropTypes.arrayOf(PropTypes.string),
                reviews: PropTypes.arrayOf(PropTypes.string),
                likedAnimals: PropTypes.arrayOf(PropTypes.string),
                adopted: PropTypes.arrayOf(PropTypes.string),
                phone: PropTypes.string,
                animal_shelter: PropTypes.bool,
                website: PropTypes.string,
                address_line: PropTypes.string,
                country: PropTypes.string,
                region: PropTypes.string,
                province: PropTypes.string,
                city: PropTypes.string,
                description: PropTypes.string,
                first_name: PropTypes.string,
                last_name: PropTypes.string,
                email: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                createdAt: PropTypes.string,
                updatedAt: PropTypes.string,
                __v: PropTypes.any,
            }),
            PropTypes.string
        ])
    }).isRequired,
    uploadPictures: PropTypes.func.isRequired,
    deletePicture: PropTypes.func.isRequired
}
export default EditPictures
