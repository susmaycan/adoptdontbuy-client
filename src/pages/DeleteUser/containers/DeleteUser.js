import { connect } from 'react-redux'
import {
    deleteUser, resetState
} from '../../../actions/user'

import {
    logout
} from '../../../actions/login'

import DeleteUserView from '../components/DeleteUserView'

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    error: state.userReducer.delete.error,
    errorMsg: state.userReducer.delete.errorMsg,
    success: state.userReducer.delete.success,
    isLoading: state.userReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (userId) => dispatch(deleteUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserView)
