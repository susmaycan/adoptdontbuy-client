import { connect } from 'react-redux'
import {
    recoverPassword,
    resetState
} from '../../../actions/login'
import RecoverPassword from '../components'

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    error: state.loginReducer.recover.error,
    errorMsg: state.loginReducer.recover.errorMsg,
    isLoading: state.loginReducer.isLoading,
    success: state.loginReducer.recover.success
})

const mapDispatchToProps = (dispatch) => ({
    recoverPassword: (email) => dispatch(recoverPassword(email)),
    resetState: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword)
