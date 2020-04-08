import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignUpForm = ({ error, handleCloseSignUp, handleSubmit, isLoading, handleOpenSignUn, openModalLogin }) => (
    <Formik
        initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
        }}
        onSubmit={(values) => {
            handleSubmit(values)
            handleCloseSignUp()
        }}
        validationSchema={
            Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                username: Yup.string()
                    .max(15, 'Username must be less than 12 characters')
                    .min(4, 'Password must be at least 4 characters')
                    .required('Username is required'),
                password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
            })}
        render={({ errors, touched }) => (
            <Form >

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                        name="email"
                        type="text"
                        placeholder="Email"
                        className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field
                        name="username"
                        type="text"
                        placeholder="Username"
                        className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
                    />
                    <small id="emailHelp" class="form-text text-muted">You won't be able to change your username.</small>
                    <ErrorMessage name="username" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Your password again"
                        className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group centered">
                    <button className="button" type="submit">Sign up</button>
                    <button className="button"type="reset">Reset</button>
                </div>
                <div className="forgot_pass_username">
                    <p className="notlink" onClick={openModalLogin}>Already have an account? <strong>Login here</strong></p>
                </div>
            </Form>
        )}
    />
)

SignUpForm.propTypes = {
    //TODO
}
export default SignUpForm
