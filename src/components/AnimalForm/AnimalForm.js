import React from 'react'
import {
    Button,
    ProvinceSelect,
    Select
} from '../../components'
import PropTypes from 'prop-types'
import {Translate, I18n} from 'react-redux-i18n'
import {buttonTypes} from "../../constants";

// const MIN_YEAR = 2000
// const MAX_YEAR = 3000 //TODO change this

const AnimalForm = ({animal, updateInput, submit, action}) => (
    <form className="form-animal" onSubmit={submit}>
        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='animal.name'/></label>
                    <div className="control is-expanded">
                        <input
                            onChange={updateInput}
                            className="input"
                            required
                            value={animal.name}
                            name="name"
                            placeholder="Toby"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="specie" className="label"><Translate value='animal.specie'/></label>
                    <div className="control is-expanded">
                        <Select
                            value={animal.specie}
                            name='specie'
                            handleChange={updateInput}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="breed" className="label"><Translate value='animal.breed'/></label>
                    <div className="control is-expanded">
                        <input
                            required
                            onChange={updateInput}
                            value={animal.breed}
                            name="breed"
                            className="input"
                            placeholder="Bodeguero"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="columns">
            <div className="column">
                <div className="field">
                    <label htmlFor="gender" className="label"><Translate value='animal.gender'/></label>
                    <div className="control is-expanded">
                        <Select
                            value={animal.gender}
                            name='gender'
                            handleChange={updateInput}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="size" className="label"><Translate value='animal.size'/></label>
                    <div className="control is-expanded">
                        <Select
                            value={animal.size}
                            name='size'
                            handleChange={updateInput}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="age" className="label"><Translate value='animal.age'/></label>
                    <div className="control is-expanded">
                        <Select
                            value={animal.age}
                            name='age'
                            handleChange={updateInput}
                        />
                    </div>
                </div>
            </div>
        </div>


        <div className="columns">
            <div className="column">
                <div className="field">
                    <label htmlFor="region" className="label"><Translate value='animal.region'/></label>
                    <div className="control is-expanded">
                        <Select
                            value={animal.region}
                            name='region'
                            handleChange={updateInput}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="province" className="label"><Translate value='animal.province'/></label>
                    <div className="control is-expanded">
                        <ProvinceSelect
                            province={animal.province}
                            region={animal.region}
                            handleChange={updateInput}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="city" className="label"><Translate value='animal.city'/></label>
                    <div className="control is-expanded">
                        <input
                            required
                            onChange={updateInput}
                            value={animal.city}
                            name="city"
                            className="input"
                            placeholder="City"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="columns">
            <div className="column">
                <div className="field">
                    <label htmlFor="about" className="label"><Translate value='animal.about'/></label>
                    <div className="control is-expanded">
                        <textarea
                            name="about"
                            onChange={updateInput}
                            value={animal.about}
                            className="textarea"
                            placeholder="Tell us about your animal"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="columns">
            <div className="column">
                <div className="field">
                    <div className="control is-expanded">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="castrated"
                                onChange={updateInput}
                                checked={animal.castrated}
                            />&nbsp;
                            <Translate value='animal.castrated'/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <div className="control is-expanded">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="vaccinated"
                                onChange={updateInput}
                                checked={animal.vaccinated}
                            />&nbsp;
                            <Translate value='animal.vaccinated'/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <div className="control is-expanded">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="alongWithDogs"
                                onChange={updateInput}
                                checked={animal.alongWithDogs}
                            />&nbsp;
                            <Translate value='animal.alongWithDogs'/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <div className="control is-expanded">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="alongWithCats"
                                onChange={updateInput}
                                checked={animal.alongWithCats}
                            />&nbsp;
                            <Translate value='animal.alongWithCats'/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <div className="control is-expanded">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                name="alongWithKids"
                                onChange={updateInput}
                                checked={animal.alongWithKids}
                            />&nbsp;
                            <Translate value='animal.alongWithKids'/>
                        </label>
                    </div>
                </div>
            </div>
        </div>


        {action === "add" ?

            <div className="field">
                <div className="file has-name">
                    <label className="file-label">
                        <input
                            className="file-input"
                            type="file"
                            name="picture"
                            required
                            multiple="multiple"
                            onChange={updateInput}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"/>
                          </span>
                          <span className="file-label">
                            Choose a file…
                          </span>
                        </span>
                        <span className="file-name">
                            {animal.picture !== undefined ? animal.picture[0].name : 'No files selected yet.'}
                        </span>
                    </label>
                </div>
            </div>
            :
            null}

        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='animal.socialLevel'/></label>
                    <div className="control is-expanded">
                        <input
                            onChange={updateInput}
                            className="input"
                            type="number"
                            value={animal.socialLevel}
                            name="socialLevel"
                            placeholder="From to 0 to 5"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='animal.energyLevel'/></label>
                    <div className="control is-expanded">
                        <input
                            onChange={updateInput}
                            className="input"
                            type="number"
                            value={animal.energyLevel}
                            name="energyLevel"
                            placeholder="From to 0 to 5"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='animal.traumaLevel'/></label>
                    <div className="control is-expanded">
                        <input
                            onChange={updateInput}
                            className="input"
                            type="number"
                            value={animal.traumaLevel}
                            name="traumaLevel"
                            placeholder="From to 0 to 5"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="has-text-centered">
            <Button
                submit={true}
            >
                <Translate value={buttonTypes.FINISH}/>
            </Button>
        </div>
    </form>
)
AnimalForm.propTypes = {
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
    }).isRequired
}
export default AnimalForm
