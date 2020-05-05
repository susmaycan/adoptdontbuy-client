import { connect } from 'react-redux'
import {
    fetchAnimal,
    resetState
} from '../../../actions/animal'
import Animal from '../components/AnimalDetailView'

const mapStateToProps = state => ({
    animal: state.animalReducer.animal,
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.fetch.error,
    errorDelete: state.animalReducer.delete.error,
    errorDeleteMsg: state.animalReducer.delete.errorMsg,
    successDelete: state.animalReducer.delete.success,
    success: state.animalReducer.fetch.success,
    errorMsg: state.animalReducer.fetch.errorMsg,
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    getAnimal: (id) => dispatch(fetchAnimal(id)),
    reset: () => dispatch(resetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
