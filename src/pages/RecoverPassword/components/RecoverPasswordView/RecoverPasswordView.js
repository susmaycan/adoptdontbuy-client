import React from 'react'
import RecoverPasswordForm from '../RecoverPasswordForm'
import PropTypes from 'prop-types'
import {Container, Title} from '../../../../components'
import {Translate} from 'react-redux-i18n'
import {Redirect} from "react-router";

class RecoverPasswordView extends React.Component {

    constructor(props) {
        super(props)

        this.redirectToHome = this.redirectToHome.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.success !== this.props.success) {
            if (this.props.success)
                this.redirectToHome()
        }
    }

    redirectToHome() {
        setTimeout(() => {
            //this.props.Router.history.push('/')
            this.props.history.push('/')
            this.props.resetState()
        }, 3000)
    }

    render() {
        const {isLoggedIn, error, errorMsg, recoverPassword, isLoading, success} = this.props
        return (
            <>
                {isLoggedIn ? <Redirect to='/'/> : null}
                <Container center={true}>
                    <Title><Translate value='recoverPassword.title'/> </Title>
                    <RecoverPasswordForm
                        error={error}
                        errorMsg={errorMsg}
                        handleSubmit={recoverPassword}
                        isLoading={isLoading}
                        success={success}
                        redirectToHome={this.redirectToHome}
                    />
                </Container>
            </>
        )
    }
}

RecoverPasswordView.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    recoverPassword: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}
export default RecoverPasswordView
