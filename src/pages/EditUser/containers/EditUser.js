import {connect} from 'react-redux'
import {fetchUser, resetState, updateEmail, updatePassword, updatePhotoUser, updateUser,} from '../../../actions/user'
import {logout} from '../../../actions/login'

import EditUser from '../components/EditUser'

const mapStateToProps = state => ({
    user: state.userReducer.user,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.edit.error,
    errorFetch: state.userReducer.fetch.error,
    errorMsgFetch: state.userReducer.fetch.errorMsg,
    errorMsg: state.userReducer.edit.errorMsg,
    success: state.userReducer.edit.success,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    updateUserDB: (user) => dispatch(updateUser(user)),
    uploadPhoto: (file, filename) => dispatch(updatePhotoUser(file, filename)),
    updateEmail: (email) => dispatch(updateEmail(email)),
    updatePassword: (password) => dispatch(updatePassword(password)),
    logout: () => dispatch(logout()),
    resetState: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
