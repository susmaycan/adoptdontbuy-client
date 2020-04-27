import React from 'react';
import {supportedLocales} from "../../../../translations/config";
import LanguageSelectInput from "../../../../components/LanguageSelectInput";

class LanguageSelector extends React.Component {

    constructor(props) {
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
    }

    changeLanguage(e) {
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
        );
    }
}

export default LanguageSelector
