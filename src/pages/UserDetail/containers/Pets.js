import { connect } from 'react-redux'
import {
    fetchUser,
    fetchAnimalsUser
} from '../../../actions/user'

import Pets from '../components/PetsByUser'

const mapStateToProps = state => ({
    user: state.userReducer.user || {},
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
    isLoadingList: state.userReducer.isLoadingList,
    animalList: state.userReducer.animalList,
    errorList: state.userReducer.errorList,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    getAnimals: (id) => dispatch(fetchAnimalsUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pets)
