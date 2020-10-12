import React from 'react'
import './LanguageSelectInput.scss'
import {PropTypes} from 'prop-types'

const LanguageSelectInput = ({supportedLocales, changeLanguage, actualLanguage}) => (
    <select className="select-css" value={actualLanguage} onChange={changeLanguage}>
        {Object.keys(supportedLocales).map(lang =>
            <option
                key={lang}
                value={lang}
            >
                {supportedLocales[lang]}
            </option>
        )}
    </select>
)
LanguageSelectInput.propTypes = {
    actualLanguage: PropTypes.string.isRequired,
    supportedLocales: PropTypes.any.isRequired,
    changeLanguage: PropTypes.func.isRequired,
}
export default LanguageSelectInput
