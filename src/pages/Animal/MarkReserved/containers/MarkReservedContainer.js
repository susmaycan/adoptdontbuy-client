import {connect} from 'react-redux'
import ReservedButton from '../components/ReservedButton'
import {updateAnimalUser} from '../../../../actions/animal'

const mapStateToProps = (state, props) => ({
    animal: props.animal,
    user: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
    error: state.userReducer.edit.error,
    errorMsg: state.userReducer.edit.errorMsg,
    success: state.userReducer.edit.success,
})

const mapDispatchToProps = (dispatch) => ({
    markAsReserved: (animal, userId) => dispatch(updateAnimalUser(animal, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReservedButton)
