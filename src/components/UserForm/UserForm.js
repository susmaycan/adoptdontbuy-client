import React from 'react'
import ProvinceSelect from '../Common/ProvinceSelect'
import PropTypes from 'prop-types'
import {
    Form,
    Col,
} from 'react-bootstrap'
import Select from "../Common/Select";

const UserForm = ({user, handleChange, handleForm}) => (

    <div className="container_div">
        <div className="centered">
            <h1 className="title"><i className="fas fa-edit"/>Update profile</h1>
        </div>
        <Form className="formAnimal" onSubmit={handleForm}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={user.first_name}
                        name="first_name"
                        type="text"
                        placeholder="Frederik"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
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
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={user.phone}
                        name="phone"
                        type="tel"
                        placeholder="+34 678 544 534"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        required
                        value={user.email}
                        name="email"
                        type="email"
                        placeholder="+34 678 544 534"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={user.website}
                        name="website"
                        type="text"
                        placeholder="http://www.protectora.es"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="picture"
                        type="file"
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridAbout">
                    <Form.Label>About you</Form.Label>
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
                    <Form.Label>Address line</Form.Label>
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
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        value={user.country}
                        name="country"
                        onChange={handleChange}
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRegion">
                    <Form.Label>Region</Form.Label>
                    <Select
                        value={user.region}
                        name='region'
                        handleChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridProvince">
                    <Form.Label>Province</Form.Label>
                    <ProvinceSelect
                        province={user.province}
                        region={user.region}
                        handleChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
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
                    <Form.Label>Is animal shelter</Form.Label>
                    <Form.Check
                        label="Is animal shelter"
                        name="animal_shetter"
                        type="checkbox"
                        checked={user.animal_shetter}
                        onChange={handleChange}
                    >
                    </Form.Check>
                </Form.Group>
            </Form.Row>

            <div className="centered">
                <button className="button" type="submit">Update user</button>
            </div>
        </Form>
    </div>
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
    handleForm: PropTypes.func
}
export default UserForm
