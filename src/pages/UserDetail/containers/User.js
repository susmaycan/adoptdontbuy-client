import { connect } from 'react-redux'
import {
    fetchUser,
    fetchAnimalsUser
} from '../../../actions/User/getUser'
import User from '../components/UserView'

const mapStateToProps = state => ({
    user: state.userReducer.user || {},
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
    isLoadingList: state.userReducer.isLoadingList,
    animalList: state.userReducer.animalList,
    errorList: state.userReducer.errorList,
    loggedUser: state.loginReducer.user,
    favourites: state.userReducer.favourites
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    getAnimals: (id) => dispatch(fetchAnimalsUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
