import React from 'react'
import PropTypes from 'prop-types'
import './Container.scss'
import {Error, Loading} from '../../components'
import {codeError} from '../../constants'
import Message from "../Message";
import {Translate} from 'react-redux-i18n'

class Container extends React.Component {

    static propTypes = {
        children: PropTypes.any.isRequired,
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        isLoggedIn: PropTypes.bool,
        requiredLogin: PropTypes.bool
    }

    render() {
        const {children, requiredLogin, isLoggedIn, isLoading, error} = this.props
        if (isLoading) {
            return (
                <Loading/>
            )
        } else if (error) {
            return (
                <Error code={codeError.SERVER_UNAVAILABLE}/>
            )
        } else if (requiredLogin && !isLoggedIn) {
            return (
                <Message><Translate value='messages.noLogin'/></Message>
            )
        } else {
            return (
                {children}
            )
        }
    }
}
export default Container
