import {setLocale} from "react-redux-i18n";
import {fallbackLocale, supportedLocales} from "../translations/config";

export function setLocaleWithFallback(desiredLocale) {
    const finalLocale = Object.keys(supportedLocales).includes(desiredLocale)
        ? desiredLocale
        : fallbackLocale

    return dispatch => dispatch(setLocale(finalLocale))
}
