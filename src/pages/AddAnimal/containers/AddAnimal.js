import { connect } from 'react-redux'
import {
    addAnimal,
    resetState
} from '../../../actions/animal'
import AddAnimalView from '../components/AddAnimalView'

const mapStateToProps = state => ({
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.add.error,
    success: state.animalReducer.add.success,
    animal: state.animalReducer.animal,
    errorMsg: state.animalReducer.add.errorMsg,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    addAnimal: (animal) => dispatch(addAnimal(animal)),
    reset: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAnimalView)
