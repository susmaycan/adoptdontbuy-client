import { connect } from 'react-redux'
import {
    loginUser, signUpUser, recoverPassword
} from '../../../actions/login'
import Layout from '../components/Layout'

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    login: state.loginReducer.login,
    signup: state.loginReducer.signup,
    recover: state.loginReducer.recover,
    isLoading: state.loginReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, pass) => dispatch(loginUser(email, pass)),
    signUpUser: (email, pass, username) => dispatch(signUpUser(email, pass, username)),
    recoverPassword: (email) => dispatch(recoverPassword(email))

})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
