import { connect } from 'react-redux'
import Favourite from '../components/Favourite'
import {fetchAnimalsUser} from "../../../actions/user";

const mapStateToProps = (state, props) => ({
    animal: props.animal,
    user: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    getAnimals: (id) => dispatch(fetchAnimalsUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)
