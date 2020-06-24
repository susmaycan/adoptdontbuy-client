import React from 'react'
import {supportedLocales} from '../../../../translations/config'
import LanguageSelectInput from '../LanguageSelectInput'
import PropTypes from 'prop-types'

class LanguageSelector extends React.Component {

    static propTypes = {
        locale: PropTypes.string.isRequired,
        setLocaleWithFallback: PropTypes.func.isRequired
    }

    changeLanguage = (e) => {
        e.preventDefault()
        let {value} = e.target
        this.props.setLocaleWithFallback(value)
    }


    render() {
        return (
            <LanguageSelectInput
                actualLanguage={this.props.locale}
                changeLanguage={this.changeLanguage}
                supportedLocales={supportedLocales}
            />
        )
    }
}

export default LanguageSelector
