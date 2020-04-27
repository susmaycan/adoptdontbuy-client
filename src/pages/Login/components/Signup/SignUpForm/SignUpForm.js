import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {Translate, I18n} from 'react-redux-i18n'
import Button from "../../../../../components/Button";
import {buttonTypes} from "../../../../../constants";

const SignUpForm = ({error, handleCloseSignUp, handleSubmit, isLoading, handleOpenSignUn, openModalLogin}) => (
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
                    .email(I18n.t('sign-up.errorEmail'))
                    .required(I18n.t('sign-up.requiredField')),
                username: Yup.string()
                    .max(15, I18n.t('sign-up.usernameMaxLength'))
                    .min(4, I18n.t('sign-up.usernameMinLength'))
                    .required(I18n.t('sign-up.requiredField')),
                password: Yup.string()
                    .min(6, I18n.t('sign-up.passwordMinLength'))
                    .required(I18n.t('sign-up.requiredField')),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], I18n.t('sign-up.passwordsDontMatch'))
                    .required(I18n.t('sign-up.requiredField')),
            })}
        render={({errors, touched}) => (
            <Form className="modal-form">
                <div className="signup-form">
                    <div className="form-group">
                        <label htmlFor="email"><Translate value='sign-up.email'/></label>
                        <Field
                            name="email"
                            type="text"
                            placeholder="Email"
                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username"><Translate value='sign-up.username'/></label>
                        <Field
                            name="username"
                            type="text"
                            placeholder="Username"
                            className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            <Translate value='sign-up.uniqueUsername'/>
                        </small>
                        <ErrorMessage name="username" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> <Translate value='sign-up.password'/></label>
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                        <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword"> <Translate value='sign-up.confirmPassword'/></label>
                        <Field
                            name="confirmPassword"
                            type="password"
                            placeholder="Your password again"
                            className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                    </div>
                </div>
                <div className="form-group">
                    <Button
                        submit={true}
                    >
                        <Translate value={buttonTypes.CONFIRM}/>
                    </Button>
                    <button className="button" type="reset">Reset</button>
                </div>
                <div className="form-div-text">
                    <span className="not-link" onClick={openModalLogin}>
                        <Translate value='sign-up.login'/>
                    </span>
                </div>
            </Form>
        )}
    />
)

SignUpForm.propTypes = {
    //TODO
}
export default SignUpForm
