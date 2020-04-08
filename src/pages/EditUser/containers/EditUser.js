import { connect } from 'react-redux'
import {
    fetchUser,
    updateUser,
    updatePhotoUser
} from '../../../actions/User/getUser'
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
    uploadPhoto: (file, filename) => dispatch(updatePhotoUser(file, filename))

})

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
