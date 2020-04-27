import { connect } from 'react-redux'
import {
    loginUser, signUpUser, recoverPassword
} from '../../../actions/login'

import Layout from '../components/Layout'

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    error: state.loginReducer.error,
    errorMsg: state.loginReducer.errorMsg,
    isLoading: state.loginReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, pass) => dispatch(loginUser(email, pass)),
    signUpUser: (email, pass, username) => dispatch(signUpUser(email, pass, username)),
    recoverPassword: (email) => dispatch(recoverPassword(email))

})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
