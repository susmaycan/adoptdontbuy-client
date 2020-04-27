import { setLocale } from "react-redux-i18n";
import { supportedLocales, fallbackLocale } from "../translations/config";

export function setLocaleWithFallback(desiredLocale) {
    const finalLocale = Object.keys(supportedLocales).includes(desiredLocale)
        ? desiredLocale
        : fallbackLocale

    return dispatch => dispatch(setLocale(finalLocale))
}
