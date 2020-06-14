import {connect} from 'react-redux'
import {loginUser, resetState} from '../../../../actions/login'

import Login from '../components'

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    error: state.loginReducer.login.error,
    errorMsg: state.loginReducer.login.errorMsg,
    success: state.loginReducer.login.success,
    isLoading: state.loginReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, pass) => dispatch(loginUser(email, pass)),
    resetState: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
