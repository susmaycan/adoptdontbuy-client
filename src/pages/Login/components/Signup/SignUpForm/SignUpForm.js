import React from 'react'
import {Translate, I18n} from 'react-redux-i18n'
import {buttonTypes} from "../../../../../constants";
import {SuccessMessage, Button} from '../../../../../components'
import FormValidator from "../../../../../utils/FormValidator";


class SignUpForm extends React.Component {

    constructor(props) {
        super(props)

        this.validator = new FormValidator([
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'That is not a valid email.'
            },
            {
                field: 'username',
                method: 'isEmpty',
                validWhen: false,
                message: 'Username is required.'
            }, {
                field: 'username',
                method: 'isLength',
                args:[{min: 4, max: 12}],
                validWhen: true,
                message: 'Username must be between 4 and 12 characters.'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required.'
            },
            {
                field: 'password',
                method: 'isLength',
                args:[{min: 6, max: 12}],
                validWhen: true,
                message: 'Password must be between 6 and 12 characters.'
            },
            {
                field: 'confirmPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password confirmation is required.'
            },
            {
                field: 'confirmPassword',
                method: this.passwordMatch,
                validWhen: true,
                message: 'Password and password confirmation do not match.'
            }
        ])
        this.state = {
            password: '',
            email: '',
            confirmPassword: '',
            username: '',
            validation: this.validator.valid(),
        }

        this.submitted = false
        this.success = false
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    passwordMatch = (confirmation, state) => (state.password === confirmation)

    handleInputChange(e) {
        e.preventDefault()

         const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }


    handleSubmit(e) {
        e.preventDefault()

        const validation = this.validator.validate(this.state)
        this.setState({ validation })
        this.submitted = true

        if (validation.isValid) {
            const {email, password, username} = this.state
            const {error, isLoading, handleClose} = this.props
            this.props.handleSubmit(email, password, username)

            // if(!error && !isLoading){
            //     this.success = true
            //     setTimeout(handleClose, 3000);
            // }

        }
    }

    render() {
        const {error, isLoading, handleClose, openModalLogin} = this.props
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className="modal-form">
                <div className="field">
                    <label htmlFor="email" className="label"><Translate value='sign-up.email'/></label>
                    <div className="control">
                        <input
                            onChange={this.handleInputChange}
                            className={validation.email.isInvalid ? 'is-danger input' : 'input'}
                            value={this.state.email}
                            name="email"
                            placeholder="youremail@gmail.com"/>
                    </div>
                    {validation.email.isInvalid ? <p className="help is-danger">{validation.email.message}</p> : null}
                </div>
                <div className="field">
                    <label htmlFor="username" className="label"><Translate value='sign-up.username'/></label>
                    <div className="control">
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.username}
                            className={validation.username.isInvalid ? 'input is-danger' : 'input'}
                            name="username"
                            type="text"/>
                    </div>
                    {validation.username.isInvalid ? <p className="help is-danger">{validation.username.message}</p> : null}
                    <p className="help"><Translate value='sign-up.uniqueUsername'/></p>

                </div>
                <div className="field">
                    <label htmlFor="password" className="label"><Translate value='sign-up.password'/></label>
                    <div className="control">
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            className={validation.password.isInvalid ? 'input is-danger' : 'input'}
                            name="password"
                            type="password"/>
                    </div>
                    {validation.password.isInvalid ? <p className="help is-danger">{validation.password.message}</p> : null}
                </div>
                <div className="field">
                    <label htmlFor="confirmPassword" className="label"><Translate
                        value='sign-up.confirmPassword'/></label>
                    <div className="control">
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.confirmPassword}
                            className={validation.confirmPassword.isInvalid  ? 'input is-danger' : 'input'}
                            name="confirmPassword"
                            type="password"/>
                    </div>
                    {validation.confirmPassword.isInvalid ?
                        <p className="help is-danger">{validation.confirmPassword.message}</p> : null}
                </div>
                {error ?
                    <div className="form-div-error">
                        There was an error.
                    </div>
                    :
                    ""}
                {this.success ?
                    <SuccessMessage
                        close={handleClose}
                    >
                        User successfully added to database.
                    </SuccessMessage>
                    : null}
                {isLoading ?
                    <button className="button is-loading">Loading</button>
                    :
                    <Button
                        submit={true}
                        disabled={this.success}
                    >
                        <Translate value={buttonTypes.CONFIRM}/>
                    </Button>
                }
                <div className="form-div-text">
                    <span className="not-link" onClick={openModalLogin}>
                        <Translate value='sign-up.login'/>
                    </span>
                </div>
            </form>
        )
    }
}

// const SignUpForm = ({error, handleCloseSignUp, handleSubmit, isLoading, handleOpenSignUn, openModalLogin}) => (
//     <Formik
//         initialValues={{
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }}
//         onSubmit={(values) => {
//             handleSubmit(values)
//             handleCloseSignUp()
//         }}
//         validationSchema={
//             Yup.object().shape({
//                 email: Yup.string()
//                     .email(I18n.t('sign-up.errorEmail'))
//                     .required(I18n.t('sign-up.requiredField')),
//                 username: Yup.string()
//                     .max(15, I18n.t('sign-up.usernameMaxLength'))
//                     .min(4, I18n.t('sign-up.usernameMinLength'))
//                     .required(I18n.t('sign-up.requiredField')),
//                 password: Yup.string()
//                     .min(6, I18n.t('sign-up.passwordMinLength'))
//                     .required(I18n.t('sign-up.requiredField')),
//                 confirmPassword: Yup.string()
//                     .oneOf([Yup.ref('password'), null], I18n.t('sign-up.passwordsDontMatch'))
//                     .required(I18n.t('sign-up.requiredField')),
//             })}
//         render={({errors, touched}) => (
//             <Form className="modal-form">
//                 <div className="signup-form">
//                     <div className="form-group">
//                         <label htmlFor="email"><Translate value='sign-up.email'/></label>
//                         <Field
//                             name="email"
//                             type="text"
//                             placeholder="Email"
//                             className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
//                         />
//                         <ErrorMessage name="email" component="div" className="invalid-feedback"/>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username"><Translate value='sign-up.username'/></label>
//                         <Field
//                             name="username"
//                             type="text"
//                             placeholder="Username"
//                             className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
//                         />
//                         <small id="emailHelp" className="form-text text-muted">
//                             <Translate value='sign-up.uniqueUsername'/>
//                         </small>
//                         <ErrorMessage name="username" component="div" className="invalid-feedback"/>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password"> <Translate value='sign-up.password'/></label>
//                         <Field
//                             name="password"
//                             type="password"
//                             placeholder="Password"
//                             className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
//                         <ErrorMessage name="password" component="div" className="invalid-feedback"/>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="confirmPassword"> <Translate value='sign-up.confirmPassword'/></label>
//                         <Field
//                             name="confirmPassword"
//                             type="password"
//                             placeholder="Your password again"
//                             className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
//                         <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <Button
//                         submit={true}
//                     >
//                         <Translate value={buttonTypes.CONFIRM}/>
//                     </Button>
//                     <button className="button" type="reset">Reset</button>
//                 </div>
//                 <div className="form-div-text">
//                     <span className="not-link" onClick={openModalLogin}>
//                         <Translate value='sign-up.login'/>
//                     </span>
//                 </div>
//             </Form>
//         )}
//     />
// )

SignUpForm.propTypes = {
    //TODO
}
export default SignUpForm
