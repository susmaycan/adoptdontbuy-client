import React from 'react'
import {SuccessMessage, Button} from '../../../../../components'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from '../../../../../constants'

class RecoverPasswordForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            success: false
        }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e) {
        e.preventDefault()
        this.props.handleSubmit(e.target.email.value)
        if (!this.props.error && !this.props.isLoading) {
            this.setState({
                success: true
            })
            setTimeout(this.props.handleClose, 3000);
        }
    }

    render() {
        const {error, errorMsg, handleClose, openModalLogin, isLoading} = this.props

        return (
            <form onSubmit={this.submitForm} className="modal-form">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" name="email" type="email" placeholder="youremail@gmail.com"/>
                        {error === true ? <p className="help is-danger">{errorMsg}</p> : null}
                    </div>
                </div>
                {this.state.success ?
                    <SuccessMessage
                        close={handleClose}
                    >
                        Email sent. Check your inbox.
                    </SuccessMessage>
                    : null}
                {isLoading === true ?
                    <button className="button is-loading">Loading</button>
                    :
                    <Button
                        submit={true}
                    >
                        <Translate value={buttonTypes.CONFIRM}/>
                    </Button>
                }
            </form>
        )
    }
}

RecoverPasswordForm.propTypes = {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    errorMsg: PropTypes.string,
    openModalLogin: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
}
export default RecoverPasswordForm
