import React from 'react'
import {
    Formik,
    Field,
    Form,
    ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import Button from '../../../../../components/Button'
import Loading from '../../../../../components/Loading'
import PropTypes from 'prop-types'
import {Translate, I18n} from 'react-redux-i18n'
import {buttonTypes} from "../../../../../constants";
import './LoginForm.scss'

const LoginForm = ({loginError, errorMsg, openModalSignUp, handleSubmit, isLoading, recoverPassword}) => (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email(I18n.t('login.errorEmail'))
                .required(I18n.t('login.requiredField')),
            password: Yup.string()
                .required(I18n.t('login.requiredField')),
        })}
        onSubmit={fields => {
            handleSubmit(fields.email, fields.password)
        }}
        render={({errors, status, touched}) => (
            <Form className="modal-form">
                <div className="form-group">
                    <label htmlFor="email"><Translate value='login.email'/></label>
                    <Field name="email" type="text"
                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                    <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"><Translate value='login.password'/></label>
                    <Field name="password" type="password"
                           className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                    <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                </div>
                {loginError === true ?
                    <div className="form-div-error">
                        {errorMsg}
                    </div>
                    :
                    ""}
                <div className="form-div-text">
                    <span className="not-link forgot-password" onClick={recoverPassword}>
                            <Translate value='login.forgotPass'/>
                    </span>
                </div>
                {isLoading === true ?
                    <Loading/>
                    :
                    <div className="form-group">
                        <Button
                            submit={true}
                        >
                            <Translate value={buttonTypes.CONFIRM}/>
                        </Button>
                    </div>
                }
                <div className="form-div-text">
                    <span className="not-link" onClick={openModalSignUp}>
                        <Translate value='login.sign-up'/>
                    </span>
                </div>
            </Form>
        )}
    />
)

LoginForm.propTypes = {
    loginError: PropTypes.bool,
    isLoading: PropTypes.bool,
    errorMsg: PropTypes.string,
    openModalSignUp: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    recoverPassword: PropTypes.func.isRequired,

}
export default LoginForm
