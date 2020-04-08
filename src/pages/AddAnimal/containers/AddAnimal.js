import { connect } from 'react-redux'
import {
    addAnimal
} from '../../../actions/Animal'
import AddAnimalView from '../components/AddAnimalView'

const mapStateToProps = state => ({
    animals: state.animalListReducer.animals || [],
    isLoading: state.animalListReducer.isLoading,
    error: state.animalListReducer.error,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    addAnimal: (animal) => dispatch(addAnimal(animal))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAnimalView);
