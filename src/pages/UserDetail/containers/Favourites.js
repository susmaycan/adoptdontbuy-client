import { connect } from 'react-redux'
import {
    fetchUser,
    fetchAnimalsUser
} from '../../../actions/user'

import Favourites from '../components/Favourites'

const mapStateToProps = state => ({
    user: state.userReducer.user || {},
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
    isLoadingList: state.userReducer.isLoadingList,
    errorList: state.userReducer.errorList,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
    animalList: state.userReducer.favourites
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    getAnimals: (id) => dispatch(fetchAnimalsUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
