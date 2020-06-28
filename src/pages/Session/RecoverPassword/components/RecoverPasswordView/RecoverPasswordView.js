import React from 'react'
import RecoverPasswordForm from '../RecoverPasswordForm'
import PropTypes from 'prop-types'
import {Box, Title} from '../../../../../components'
import {Translate} from 'react-redux-i18n'
import {Redirect} from 'react-router'

class RecoverPasswordView extends React.Component {

    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        success: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        recoverPassword: PropTypes.func.isRequired,
        resetState: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.success !== this.props.success) {
            if (this.props.success)
                this.redirectToHome()
        }
    }

    redirectToHome = () => {
        setTimeout(() => {
            this.props.history.push('/')
            this.props.resetState()
        }, 3000)
    }

    render() {
        const {isLoggedIn} = this.props
        return (
            <React.Fragment>
                {isLoggedIn ? <Redirect to='/'/> : null}
                <Box center={true}>
                    <Title><Translate value='recoverPassword.title'/> </Title>
                    <RecoverPasswordForm
                        redirectToHome={this.redirectToHome}
                        {...this.props}
                    />
                </Box>
            </React.Fragment>
        )
    }
}
export default RecoverPasswordView
