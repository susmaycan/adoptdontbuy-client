import React from 'react'
import ProvinceSelect from '../../../../../components/ProvinceSelect'
import PropTypes from 'prop-types'
import Select from "../../../../../components/Select";
import {Translate, I18n} from 'react-redux-i18n'
import Button from "../../../../../components/Button";
import {buttonTypes} from "../../../../../constants";

const UserForm = ({user, password, handleChange, handleForm, handlePassword}) => (
    <form className="formAnimal" onSubmit={handleForm}>
        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='user.first_name'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            value={user.first_name}
                            name="first_name"
                            type="text"
                            placeholder="Frederik"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="specie" className="label"><Translate value='user.last_name'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            value={user.last_name}
                            name="last_name"
                            type="text"
                            placeholder="González"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='user.phone'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            value={user.phone}
                            name="phone"
                            type="tel"
                            placeholder="+34 678 544 534"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="specie" className="label"><Translate value='user.email'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            required
                            value={user.email}
                            name="email"
                            type="email"
                            placeholder="pepito@gmail.com"/>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="field">
                    <label htmlFor="specie" className="label"><Translate value='user.website'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            value={user.website}
                            name="website"
                            type="text"
                            placeholder="http://www.protectora.es"/>
                    </div>
                </div>
            </div>
        </div>


        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='user.password'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handlePassword}
                            value={password.newPassword}
                            name="newPassword"
                            type="password"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="specie" className="label"><Translate value='user.confirmPassword'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handlePassword}
                            value={password.confirmPassword}
                            name="confirmPassword"
                            type="password"
                        />
                        {password.errorDontMatch ? <p>Passwords don't match</p> : ''}
                    </div>
                </div>
            </div>
        </div>

        <div className="field">
            <div className="file has-name">
                <label className="file-label">
                    <input
                        className="file-input"
                        type="file"
                        name="picture"
                        onChange={handleChange}
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
                            'No files selected yet'
                        {/*{user.picture !== undefined ? animal.picture[0].name : 'No files selected yet.'}*/}
                        </span>
                </label>
            </div>
        </div>

        <div className="columns">
            <div className="column">
                <div className="field">
                    <label className="label"><Translate value='user.address_line'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            value={user.address_line}
                            name="address_line"
                            type="text"
                            placeholder="C/Ardilla, 9"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <div className="field">
                    <label htmlFor="specie" className="label"><Translate value='user.country'/></label>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            onChange={handleChange}
                            value={user.country}
                            name="country"
                            type="text"
                            placeholder="Spain"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="region" className="label"><Translate value='user.region'/></label>
                    <div className="control is-expanded">
                        <Select
                            value={user.region}
                            name='region'
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="province" className="label"><Translate value='user.province'/></label>
                    <div className="control is-expanded">
                        <ProvinceSelect
                            province={user.province}
                            region={user.region}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label htmlFor="city" className="label"><Translate value='user.city'/></label>
                    <div className="control is-expanded">
                        <input
                            required
                            onChange={handleChange}
                            value={user.city}
                            name="city"
                            className="input"
                            placeholder="Sevilla"
                        />
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
                                name="animal_shelter"
                                onChange={handleChange}
                                checked={user.animal_shelter}
                            />&nbsp;
                            <Translate value='user.isAnimalShelter'/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <div className="field">
                    <label htmlFor="about" className="label"><Translate value='user.description'/></label>
                    <div className="control is-expanded">
                        <textarea
                            onChange={handleChange}
                            value={user.description}
                            name="description"
                            className="textarea"
                            placeholder="Tell us about yourself"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="centered">
            <Button
                submit={true}
            >
                <Translate value={buttonTypes.CONFIRM}/>
            </Button>
        </div>
    </form>
)
UserForm.propTypes = {
    user: PropTypes.shape({
        picture: PropTypes.string,
        _id: PropTypes.string.isRequired,
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
    handleChange: PropTypes.func,
    handleForm: PropTypes.func,
    password: PropTypes.object,
    handlePassword: PropTypes.func
}
export default UserForm
