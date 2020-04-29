import React from 'react'
import SignUpForm from '../SignUpForm'
import PropTypes from 'prop-types'
import {Container, Title} from '../../../../components'
import {Translate} from 'react-redux-i18n'
import {Redirect} from "react-router";

class SignUpView extends React.Component {

    render() {
        const {isLoggedIn, error, errorMsg, signUpUser, isLoading} = this.props
        return (
            <>
                {isLoggedIn ? <Redirect to='/'/> : null}
                <Container center={true}>
                    <Title><Translate value='sign-up.title'/> </Title>
                    <SignUpForm
                        error={error}
                        errorMsg={errorMsg}
                        handleSubmit={signUpUser}
                        isLoading={isLoading}
                    />
                </Container>
            </>
        )
    }
}

SignUpView.propTypes = {
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    signUpUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}
export default SignUpView
