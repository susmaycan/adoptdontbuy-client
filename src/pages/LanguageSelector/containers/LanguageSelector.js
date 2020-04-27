import {setLocaleWithFallback} from '../../../actions/language'
import {connect} from 'react-redux'
import LanguageSelector from '../components/LanguageSelector'

const mapStateToProps = state => ({
    locale: state.i18n.locale
})

const mapDispatchToProps = {
    setLocaleWithFallback
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
