import {connect} from 'react-redux'
import {fetchUser} from '../../../../actions/user'

import Pets from '../components/PetsByUser'

const mapStateToProps = state => ({
    user: state.userReducer.user || {},
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pets)
