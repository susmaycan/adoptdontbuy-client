import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from '../../../../../constants'
import './LoginForm.scss'
import {Link} from 'react-router-dom'
import {Button, Notification} from '../../../../../components'

class LoginForm extends React.Component {

    static propTypes = {
        error: PropTypes.bool,
        isLoading: PropTypes.bool,
        success: PropTypes.bool,
        errorMsg: PropTypes.string,
        loginUser: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(e.target.email.value, e.target.password.value)
    }

    render() {
        const {error, errorMsg, isLoading, success} = this.props
        return (
            <form onSubmit={this.handleSubmit} className="modal-form has-text-centered">
                <div className="field">
                    <label htmlFor="email" className="label"><Translate value='login.email'/></label>
                    <div className="control is-expanded has-icons-left has-icons-right">
                        <input
                            required
                            disabled={success}
                            className={error ? 'input is-danger' : success ? 'input is-success' : 'input'}
                            name="email"
                            type="email"
                            placeholder="youremail@gmail.com"/>
                        <span className="icon is-left">
                          <i className="fas fa-envelope"/>
                        </span>
                        {success ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"/>
                            </span>
                            : error ?
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"/>
                                    </span>
                                : null}
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="password" className="label"><Translate value='login.password'/></label>
                    <div className="control is-expanded has-icons-left has-icons-right">
                        <input
                            required
                            disabled={success}
                            className={error ? 'input is-danger' : success ? 'input is-success' : 'input'}
                            name="password"
                            type="password"
                            placeholder="Your password"/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"/>
                        </span>
                        {success ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-check"/>
                            </span>
                            : null}
                        {error ?
                            <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"/>
                             </span>
                            : null}
                    </div>
                </div>
                {error ?
                    <Notification error={true}>{errorMsg}</Notification>
                    :
                    ""}
                <div className="form-div-text">
                    <Link to='/recoverPassword'>
                    <span className="not-link forgot-password">
                            <Translate value='login.forgotPass'/>
                    </span>
                    </Link>
                </div>

                {isLoading ?
                    <button className="button is-loading">Loading</button>
                    :
                    <Button
                        submit={true}
                        disabled={success}
                    >
                        <Translate value={buttonTypes.CONFIRM}/>
                    </Button>
                }
            </form>
        )
    }
}
export default LoginForm
