import {connect} from 'react-redux'
import Navbar from '../components/Navbar'
import {logout} from '../../../actions/login'

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
