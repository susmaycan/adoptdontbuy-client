import React from 'react'
import {
    Tabs,
    Tab,
} from 'react-bootstrap'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import { ccaa, provinces } from '../../constants'

const UserForm = ({user, loggedUser, handleChange, handleForm, updateProvinces}) => (

    <Formik
        initialValues={{
            email: loggedUser.email,
            password: '',
            confirmPassword: ''
        }}
        onSubmit={(values) => {
            handleForm()
        }}
        validationSchema={
            Yup.object().shape({
                first_name: Yup.string(),
                last_name: Yup.string(),
                description: Yup.string(),
                website: Yup.string(),
                picture: Yup.string(),
                address_line: Yup.string(),
                phone: Yup.number()
                    .min(9, "Phone must be valid"),
                province: Yup.string(),
                region: Yup.string(),
                country: Yup.string(),
                city: Yup.string(),
                animal_shetter: Yup.bool(),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required')
                // password: Yup.string()
                //     .min(6, 'Password must be at least 6 characters')
                //     .required('Password is required'),
                // confirmPassword: Yup.string()
                //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
                //     .required('Confirm Password is required')
            })}
        render={({errors, touched}) => (
            <div className="container_div">
                <div className="centered">
                    <h1 className="title"><i className="fas fa-edit" />Update profile</h1>
                </div>
                <Form className="userForm">
                    <div className="form-group inputForm">
                        <label htmlFor="first_name">First Name</label>
                        <Field
                            name="first_name"
                            value={user.first_name}
                            onChange={handleChange} type="text"
                            className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="first_name" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group inputForm">
                        <label htmlFor="last_name">Last name</label>
                        <Field
                            name="last_name"
                            type="text"
                            value={user.last_name}
                            onChange={handleChange}
                            className={'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="last_name" component="div" className="invalid-feedback"/>
                    </div>

                    <div className="form-group inputForm">
                        <label htmlFor="phone">Phone</label>
                        <Field
                            name="phone"
                            type="text"
                            value={user.phone}
                            onChange={handleChange}
                            className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="phone" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group inputForm">
                        <label htmlFor="website">Website</label>
                        <Field
                            name="website"
                            type="URL"
                            value={user.website}
                            onChange={handleChange}
                            className={'form-control' + (errors.website && touched.website ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="website" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Profile Picture</label>
                        <Field
                            name="picture"
                            type="file"
                            onChange={handleChange}
                            className={'form-control' + (errors.picture && touched.picture ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="picture" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <Field
                            name="description"
                            type="text"
                            value={user.description}
                            onChange={handleChange}
                            className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="description" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address_line">Address</label>
                        <Field
                            name="address_line"
                            type="text"
                            value={user.address_line}
                            onChange={handleChange}
                            className={'form-control' + (errors.address_line && touched.address_line ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="address_line" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <Field
                            name="country"
                            type="text"
                            value={user.country}
                            onChange={handleChange}
                            className={'form-control' + (errors.country && touched.country ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="country" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="region">Region</label>
                        <select
                            name="region"
                            value={user.region}
                            onChange={handleChange}
                            onClick={updateProvinces}
                            className={'form-control' + (errors.region && touched.region ? ' is-invalid' : '')}
                        >
                            <option value="-1">Select one</option>
                            {ccaa.map(region =>
                                <option key={region.autonomia_id} value={region.autonomia_id}>{region.nombre}</option>
                            )};
                        </select>
                        <ErrorMessage name="region" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="province">Province</label>
                        <select
                            name="province"
                            type="text"
                            value={user.province}
                            onChange={handleChange}
                            as="select"
                            className={'form-control' + (errors.province && touched.province ? ' is-invalid' : '')}
                        >
                            <option value="-1">Select one</option>
                            {provinces.map(prov =>
                                <option key={prov.id} value={prov.id}>{prov.nm}</option>
                            )};
                        </select>
                        <ErrorMessage name="province" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <Field
                            name="city"
                            type="text"
                            value={user.city}
                            onChange={handleChange}
                            className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="city" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                            name="email"
                            type="text"
                            onChange={handleChange}
                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal_shetter">Is animal shetter</label>
                        <Field
                            name="animal_shetter"
                            type="checkbox"
                            label="Is animal shetter"
                            onChange={handleChange}
                            checked={user.animal_shetter}
                            className={'form-check' + (errors.animal_shetter && touched.animal_shetter ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group centered">
                        <button className="button" type="submit">Update user</button>
                    </div>
                </Form>
            </div>
        )}
    />
)
export default UserForm
