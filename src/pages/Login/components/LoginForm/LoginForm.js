import React from 'react'
import {
    Alert
} from 'react-bootstrap'
import {
    Formik,
    Field,
    Form,
    ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import Button from '../../../../components/Common/Button'
import Loading from '../../../../components/Common/Loading'

const LoginForm = ({loginError, errorMsg, openModalSignUp, handleSubmit, isLoading, handleCloseLogin}) => (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required'),
        })}
        onSubmit={fields => {
            handleSubmit(fields.email, fields.password)
            // if (!isLoading && !loginError){
            //     handleCloseLogin()
            // }
        }}
        render={({errors, status, touched}) => (
            <Form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text"
                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                    <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password"
                           className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                    <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                </div>
                {loginError === true ?
                    <Alert variant="danger">
                        {errorMsg}
                    </Alert>
                    :
                    ""}
                <div className="forgot_pass_username">
                    <a href="#forgotemail">Forgot your password/username?</a>
                </div>
                {isLoading === true ?
                    <Loading/>
                    :
                    <div className="form-group">
                        <Button
                            type="login"
                        />
                    </div>
                }
                {/*<div className="forgot_pass_username">*/}
                {/*    <p className="notlink" onClick={openModalSignUp}>Don't have an account yet? <strong>Sign up</strong>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </Form>
        )}
    />
)

LoginForm.propTypes = {
    //TODO
}
export default LoginForm
