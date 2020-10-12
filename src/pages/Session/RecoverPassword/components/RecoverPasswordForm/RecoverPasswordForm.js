import React from 'react'
import Button from '../../../../../components/Button'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from '../../../../../constants'
import './RecoverPasswordForm.scss'
import {Notification} from '../../../../../components'

class RecoverPasswordForm extends React.Component {

    static propTypes = {
        error: PropTypes.bool,
        isLoading: PropTypes.bool,
        errorMsg: PropTypes.string,
        recoverPassword: PropTypes.func.isRequired,
        redirectToHome: PropTypes.func.isRequired,
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.recoverPassword(e.target.email.value)
    }

    render() {
        const {error, errorMsg, isLoading, success, redirectToHome} = this.props

        return (
            <form onSubmit={this.submitForm} className="modal-form">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className={error ? 'input is-danger' : success ? 'input is-success' : 'input'}
                            name="email"
                            type="email"
                            disabled={success}
                            placeholder="youremail@gmail.com"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"/>
                        </span>
                        {success ? <span className="icon is-small is-right">
                          <i className="fas fa-check"/>
                        </span> : null}
                        {error ? <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"/>
                        </span> : null}
                    </div>
                </div>
                {success ?
                    <Notification close={redirectToHome}>
                        Email sent. Check your inbox.
                    </Notification>
                    : null}
                {error ?
                    <Notification error={true} close={redirectToHome}>
                        {errorMsg}
                    </Notification>
                    : null}
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

export default RecoverPasswordForm
