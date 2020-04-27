import { connect } from 'react-redux'
import {
    fetchUser,
    updateUser,
    updatePhotoUser,
    updateEmail,
    updatePassword,
} from '../../../actions/user'
import {
    logout
} from '../../../actions/login'

import EditUser from '../components/EditUser'

const mapStateToProps = state => ({
    user: state.userReducer.user,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    updateUserDB: (user) => dispatch(updateUser(user)),
    uploadPhoto: (file, filename) => dispatch(updatePhotoUser(file, filename)),
    updateEmail: (email) => dispatch(updateEmail(email)),
    updatePassword: (password) => dispatch(updatePassword(password)),
    logout: () => dispatch(logout())

})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
