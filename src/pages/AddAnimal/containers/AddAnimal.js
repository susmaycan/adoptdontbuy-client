import { connect } from 'react-redux'
import {
    addAnimal
} from '../../../actions/animal'
import AddAnimalView from '../components/AddAnimalView'

const mapStateToProps = state => ({
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.error,
    errorMsg: state.animalReducer.errorMsg,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    addAnimal: (animal) => dispatch(addAnimal(animal))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAnimalView)
