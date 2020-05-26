import {connect} from 'react-redux'
import {resetState, signUpUser} from '../../../../actions/login'

import SignUp from '../components'

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    error: state.loginReducer.signup.error,
    errorMsg: state.loginReducer.signup.errorMsg,
    isLoading: state.loginReducer.isLoading,
    success: state.loginReducer.signup.success
})

const mapDispatchToProps = (dispatch) => ({
    signUpUser: (email, pass, username) => dispatch(signUpUser(email, pass, username)),
    resetState: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
