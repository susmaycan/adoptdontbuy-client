import React from 'react'
import LoginForm from '../LoginForm'
import PropTypes from 'prop-types'
import {Container, Title} from '../../../../components'
import {Translate} from 'react-redux-i18n'
import {Redirect} from "react-router";

class LoginView extends React.Component {

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
            this.props.history.push('/')
            this.props.resetState()
        }, 3000)
    }

    render() {
        const {error, errorMsg, loginUser, isLoading, success} = this.props
        return (
            <Container>
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <Title><Translate value='login.title'/> </Title>
                        <LoginForm
                            error={error}
                            success={success}
                            errorMsg={errorMsg}
                            handleSubmit={loginUser}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </Container>

        )
    }
}

LoginView.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    success: PropTypes.bool,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    loginUser: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}
export default LoginView
