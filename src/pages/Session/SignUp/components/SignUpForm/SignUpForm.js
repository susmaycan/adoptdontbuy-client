import React from 'react'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from "../../../../../constants";
import {Button, Notification} from '../../../../../components'
import FormValidator from '../../../../../utils/FormValidator'
import PropTypes from 'prop-types'

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
                args: [{min: 4, max: 12}],
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
                args: [{min: 6, max: 12}],
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
        this.handleSubmit = this.handleSubmit.bind(this)
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
        this.setState({validation})
        this.submitted = true

        if (validation.isValid) {
            const {email, password, username} = this.state
            this.props.handleSubmit(email, password, username)
        }
    }

    render() {
        const {error, isLoading, errorMsg, success} = this.props
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation

        return (
            <div className="modal-form">
                <div className="field">
                    <label htmlFor="email" className="label"><Translate value='sign-up.email'/></label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            onChange={this.handleInputChange}
                            className={validation.email.isInvalid ? 'is-danger input' : (this.submitted && !validation.email.isInvalid) || success ? 'input is-success' : 'input'}
                            value={this.state.email}
                            name="email"
                            placeholder="youremail@gmail.com"/>
                        <span className="icon is-left">
                          <i className="fas fa-envelope"/>
                        </span>
                        {(this.submitted && !validation.email.isInvalid) || success ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"/>
                            </span>
                            : validation.email.isInvalid ?
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"/>
                                    </span>
                                : null}
                    </div>
                    {validation.email.isInvalid ? <p className="help is-danger">{validation.email.message}</p> : null}
                </div>
                <div className="field">
                    <label htmlFor="username" className="label"><Translate value='sign-up.username'/></label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.username}
                            className={validation.username.isInvalid ? 'input is-danger' : (this.submitted && !validation.username.isInvalid) || success ? 'input is-success' : 'input'}
                            name="username"
                            type="text"/>
                        <span className="icon is-left">
                          <i className="fas fa-user"/>
                        </span>
                        {(this.submitted && !validation.username.isInvalid) || success  ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"/>
                            </span>
                            : validation.username.isInvalid ?
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"/>
                                    </span>
                                : null}
                    </div>
                    {validation.username.isInvalid ?
                        <p className="help is-danger">{validation.username.message}</p> : null}
                    <p className="help"><Translate value='sign-up.uniqueUsername'/></p>

                </div>
                <div className="field">
                    <label htmlFor="password" className="label"><Translate value='sign-up.password'/></label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            className={validation.password.isInvalid ? 'input is-danger' : (this.submitted && !validation.password.isInvalid) || success  ? 'input is-success' : 'input'}
                            name="password"
                            type="password"/>
                        <span className="icon is-small is-left">
                      <i className="fas fa-lock"/>
                    </span>
                        {(this.submitted && !validation.password.isInvalid) || success ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"/>
                            </span>
                            : validation.password.isInvalid ?
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"/>
                                    </span>
                                : null}
                    </div>
                    {validation.password.isInvalid ?
                        <p className="help is-danger">{validation.password.message}</p> : null}
                </div>
                <div className="field">
                    <label htmlFor="confirmPassword" className="label"><Translate
                        value='sign-up.confirmPassword'/></label>
                    <div className="control has-icons-right has-icons-left">
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.confirmPassword}
                            className={validation.confirmPassword.isInvalid ? 'input is-danger' : (this.submitted && !validation.confirmPassword.isInvalid) || success ? 'input is-success' : 'input'}
                            name="confirmPassword"
                            type="password"/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"/>
                        </span>
                        {(this.submitted && !validation.confirmPassword.isInvalid) || success ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"/>
                            </span>
                            : validation.confirmPassword.isInvalid ?
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"/>
                                    </span>
                                : null}
                    </div>
                    {validation.confirmPassword.isInvalid ?
                        <p className="help is-danger">{validation.confirmPassword.message}</p> : null}
                </div>
                {error && !isLoading ?
                    <Notification error={true}>
                        {errorMsg}
                    </Notification>
                    :
                    ""}
                {success ?
                    <Notification>
                        User successfully added to database.
                    </Notification>
                    : null}
                {isLoading ?
                    <div>
                        <button className="button is-loading">Loading</button>
                    </div>
                    :
                    <div>

                        <Button
                            disabled={this.success}
                            onAction={this.handleSubmit}
                        >
                            <Translate value={buttonTypes.CONFIRM}/>
                        </Button>
                    </div>

                }
            </div>
        )
    }
}

SignUpForm.propTypes = {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    success: PropTypes.bool,
    errorMsg: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
}
export default SignUpForm
