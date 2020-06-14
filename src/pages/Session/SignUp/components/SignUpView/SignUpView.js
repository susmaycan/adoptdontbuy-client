import React from 'react'
import SignUpForm from '../SignUpForm'
import PropTypes from 'prop-types'
import {Box, Button, Subtitle} from '../../../../../components'
import {Translate} from 'react-redux-i18n'

class SignUpView extends React.Component {
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
        }, 3000)
    }

    render() {
        const {success, error, errorMsg, signUpUser, isLoading} = this.props
        return (
            <Box center={true}>
                <div className="form-container">
                    <div className="columns is-8 is-centered is-vcentered">
                        <div className="column is-7">
                            <Subtitle><Translate value='sign-up.title'/></Subtitle>
                            <SignUpForm
                                error={error}
                                errorMsg={errorMsg}
                                handleSubmit={signUpUser}
                                isLoading={isLoading}
                                success={success}
                            />
                        </div>
                        <div className="column is-4">
                            <p><Translate value='sign-up.login'/></p>
                            <Button
                                url={'/login'}>
                                Inicia sesión
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>

        )
    }
}

SignUpView.propTypes = {
    error: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    signUpUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}
export default SignUpView
