import React from 'react'
import LoginForm from '../LoginForm'
import PropTypes from 'prop-types'
import {Box, Button, Subtitle} from '../../../../components'
import {Translate} from 'react-redux-i18n'

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
            this.props.history.goBack()
            this.props.resetState()
        }, 1000)
    }

    render() {
        const {error, errorMsg, loginUser, isLoading, success} = this.props
        return (
            <Box center={true}>
                <div className="form-container">
                    <div className="columns is-8 is-centered is-vcentered">
                        <div className="column is-7">
                            <Subtitle><Translate value='login.title'/> </Subtitle>
                            <LoginForm
                                error={error}
                                success={success}
                                errorMsg={errorMsg}
                                handleSubmit={loginUser}
                                isLoading={isLoading}
                            />
                        </div>
                        <div className="column is-4">
                            <p><Translate value='login.sign-up'/></p>
                            <Button
                                url={'/signup'}>
                                Registrarse
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>

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
