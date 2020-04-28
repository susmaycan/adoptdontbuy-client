import React from 'react'
import Button from '../../../../../components/Button'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from "../../../../../constants";
import './LoginForm.scss'

class LoginForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(e.target.email.value, e.target.password.value)
    }

    render() {
        const {loginError, errorMsg, openModalSignUp, isLoading, recoverPassword} = this.props
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className="modal-form">
                <div className="field">
                    <label htmlFor="email" className="label"><Translate value='login.email'/></label>
                    <div className="control has-icons-left">
                        <input required className="input" name="email" type="email" placeholder="youremail@gmail.com"/>
                        <span className="icon is-left">
                          <i className="fas fa-envelope"/>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="password" className="label"><Translate value='login.password'/></label>
                    <div className="control has-icons-left">
                        <input required className="input" name="password" type="password" placeholder="Your password"/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"/>
                        </span>
                    </div>
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
                    <button className="button is-loading">Loading</button>
                    :
                    <Button
                        submit={true}
                    >
                        <Translate value={buttonTypes.CONFIRM}/>
                    </Button>
                }
                <div className="form-div-text">
                    <span className="not-link" onClick={openModalSignUp}>
                        <Translate value='login.sign-up'/>
                    </span>
                </div>
            </form>
        )
    }
}

// const LoginForm = () => (
//     <Formik
//         initialValues={{
//             email: '',
//             password: '',
//         }}
//         validationSchema={Yup.object().shape({
//             email: Yup.string()
//                 .email(I18n.t('login.errorEmail'))
//                 .required(I18n.t('login.requiredField')),
//             password: Yup.string()
//                 .required(I18n.t('login.requiredField')),
//         })}
//         onSubmit={fields => {
//             handleSubmit(fields.email, fields.password)
//         }}
//         render={({errors, status, touched}) => (
//             <Form className="modal-form">
//                 <div className="form-group">
//                     <label htmlFor="email"><Translate value='login.email'/></label>
//                     <Field name="email" type="text"
//                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password"><Translate value='login.password'/></label>
//                     <Field name="password" type="password"
//                            className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
//                     <ErrorMessage name="password" component="div" className="invalid-feedback"/>
//                 </div>
//                 {loginError === true ?
//                     <div className="form-div-error">
//                         {errorMsg}
//                     </div>
//                     :
//                     ""}
//                 <div className="form-div-text">
//                     <span className="not-link forgot-password" onClick={recoverPassword}>
//                             <Translate value='login.forgotPass'/>
//                     </span>
//                 </div>
//                 {isLoading === true ?
//                     <Loading/>
//                     :
//                     <div className="form-group">
//                         <Button
//                             submit={true}
//                         >
//                             <Translate value={buttonTypes.CONFIRM}/>
//                         </Button>
//                     </div>
//                 }
//                 <div className="form-div-text">
//                     <span className="not-link" onClick={openModalSignUp}>
//                         <Translate value='login.sign-up'/>
//                     </span>
//                 </div>
//             </Form>
//         )}
//     />
// )

LoginForm.propTypes = {
    loginError: PropTypes.bool,
    isLoading: PropTypes.bool,
    errorMsg: PropTypes.string,
    openModalSignUp: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    recoverPassword: PropTypes.func.isRequired,
}
export default LoginForm
