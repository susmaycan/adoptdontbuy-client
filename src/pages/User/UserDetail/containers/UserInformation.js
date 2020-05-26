import {connect} from 'react-redux'
import {fetchUser, resetState} from '../../../../actions/user'

import UserInformation from '../components/UserInformation'
import {logout} from "../../../../actions/login";

const mapStateToProps = state => ({
    user: state.userReducer.user || {},
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.fetch.error,
    errorMsg: state.userReducer.fetch.errorMsg,
    successDelete: state.userReducer.delete.success,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    logout: () => dispatch(logout()),
    resetState: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)
