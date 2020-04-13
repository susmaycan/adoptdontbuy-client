import { connect } from 'react-redux'
import {
    editAnimal,
    fetchAnimal
} from '../../../actions/animal'
import EditAnimalView from '../components/EditAnimalView'

const mapStateToProps = state => ({
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.error,
    errorMsg: state.animalReducer.errorMsg,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
    animal: state.animalReducer.animal
})

const mapDispatchToProps = (dispatch) => ({
    editAnimal: (animal) => dispatch(editAnimal(animal)),
    getAnimal: (animalId) => dispatch(fetchAnimal(animalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAnimalView);
