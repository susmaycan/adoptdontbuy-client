import {connect} from 'react-redux'
import {editAnimal, fetchAnimal, resetState} from '../../../../actions/animal'
import EditAnimalView from '../components/EditAnimalView'

const mapStateToProps = state => ({
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.update.error,
    errorGet: state.animalReducer.fetch.error,
    success: state.animalReducer.update.success,
    errorMsg: state.animalReducer.update.errorMsg,
    errorGetMsg: state.animalReducer.fetch.errorMsg,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
    animal: state.animalReducer.animal
})

const mapDispatchToProps = (dispatch) => ({
    editAnimal: (animal) => dispatch(editAnimal(animal)),
    getAnimal: (animalId) => dispatch(fetchAnimal(animalId)),
    reset: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAnimalView)
