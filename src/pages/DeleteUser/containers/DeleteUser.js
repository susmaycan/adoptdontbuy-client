import { connect } from 'react-redux'
import {
    deleteUser
} from '../../../actions/User'

import {
    logout
} from '../../../actions/login'

import DeleteUserView from '../components/DeleteUserView'

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    error: state.userReducer.error,
    errorMsg: state.userReducer.errorMsg,
    isLoading: state.userReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (userId) => dispatch(deleteUser(userId)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserView)
