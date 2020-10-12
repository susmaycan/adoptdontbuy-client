import {connect} from 'react-redux'
import Favourite from '../components/Favourite'
import {addFavouriteAnimal, deleteFavouriteAnimal} from '../../../../actions/user'

const mapStateToProps = (state, props) => ({
    animal: props.animal,
    user: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
    error: state.userReducer.edit.error,
    errorMsg: state.userReducer.edit.errorMsg,
    success: state.userReducer.edit.success,
})

const mapDispatchToProps = (dispatch) => ({
    addFavourite: (userId, animalId) => dispatch(addFavouriteAnimal(userId, animalId)),
    deleteFavourite: (userId, animalId) => dispatch(deleteFavouriteAnimal(userId, animalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)
