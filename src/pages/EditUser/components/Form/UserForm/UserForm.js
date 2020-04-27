import React from 'react'
import ProvinceSelect from '../../../../../components/ProvinceSelect'
import PropTypes from 'prop-types'
import {
    Form,
    Col, Alert,
} from 'react-bootstrap'
import Select from "../../../../../components/Select";
import {Translate, I18n} from 'react-redux-i18n'
import Button from "../../../../../components/Button";
import {buttonTypes} from "../../../../../constants";

const UserForm = ({user, password, handleChange, handleForm, handlePassword}) => (
    <Form className="formAnimal" onSubmit={handleForm}>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>
                    <Translate value='user.first_name'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={user.first_name}
                    name="first_name"
                    type="text"
                    placeholder="Frederik"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>
                    <Translate value='user.last_name'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={user.last_name}
                    name="last_name"
                    type="text"
                    placeholder="González"/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>
                    <Translate value='user.phone'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={user.phone}
                    name="phone"
                    type="tel"
                    placeholder="+34 678 544 534"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                    <Translate value='user.email'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    required
                    value={user.email}
                    name="email"
                    type="email"
                    placeholder="+34 678 544 534"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridWebsite">
                <Form.Label>
                    <Translate value='user.website'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={user.website}
                    name="website"
                    type="text"
                    placeholder="http://www.protectora.es"/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                    <Translate value='user.password'/>
                </Form.Label>
                <Form.Control
                    onChange={handlePassword}
                    value={password.newPassword}
                    name="newPassword"
                    type="password"
                   />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridWebsite">
                <Form.Label>
                    <Translate value='user.confirmPassword'/>
                </Form.Label>
                <Form.Control
                    onChange={handlePassword}
                    value={password.confirmPassword}
                    name="confirmPassword"
                    type="password"
                   />
            </Form.Group>
        </Form.Row>
        {password.errorDontMatch ? <Alert variant="danger">Passwords don't match</Alert> : ''}

        <Form.Row>
            <Form.Group as={Col} controlId="formGridPicture">
                <Form.Label>
                    <Translate value='user.picture'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    name="picture"
                    type="file"
                />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridAbout">
                <Form.Label>
                    <Translate value='user.description'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={user.description}
                    name="description"
                    type="text"
                />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridAddressLine">
                <Form.Label>
                    <Translate value='user.address_line'/>
                </Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={user.address_line}
                    name="address_line"
                    type="text"
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>
                    <Translate value='user.country'/>
                </Form.Label>
                <Form.Control
                    value={user.country}
                    name="country"
                    onChange={handleChange}
                    type="text"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridRegion">
                <Form.Label>
                    <Translate value='user.region'/>
                </Form.Label>
                <Select
                    value={user.region}
                    name='region'
                    handleChange={handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridProvince">
                <Form.Label>
                    <Translate value='user.province'/>
                </Form.Label>
                <ProvinceSelect
                    province={user.province}
                    region={user.region}
                    handleChange={handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>
                    <Translate value='user.city'/>
                </Form.Label>
                <Form.Control
                    value={user.city}
                    name="city"
                    onChange={handleChange}
                    type="text"
                />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridAnimalShelter">
                <Form.Label>
                    <Translate value='user.isAnimalShelter'/>
                </Form.Label>
                <Form.Check
                    label={I18n.t('common.yes')}
                    name="animal_shetter"
                    type="checkbox"
                    checked={user.animal_shetter}
                    onChange={handleChange}
                >
                </Form.Check>
            </Form.Group>
        </Form.Row>

        <div className="centered">
            <Button
                submit={true}
            >
                <Translate value={buttonTypes.CONFIRM}/>
            </Button>
        </div>
    </Form>
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
        animal_shetter: PropTypes.bool,
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
