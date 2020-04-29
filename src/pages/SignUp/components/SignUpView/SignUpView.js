import React from 'react'
import SignUpForm from '../SignUpForm'
import PropTypes from 'prop-types'
import {Container, Title} from '../../../../components'
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
            this.props.history.push('/')
            this.props.resetState()
        }, 3000)
    }

    render() {
        const {success, error, errorMsg, signUpUser, isLoading} = this.props
        return (
            <Container center={true}>
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <Title><Translate value='sign-up.title'/> </Title>
                        <SignUpForm
                            error={error}
                            errorMsg={errorMsg}
                            handleSubmit={signUpUser}
                            isLoading={isLoading}
                            success={success}
                        />
                    </div>
                </div>
            </Container>

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
