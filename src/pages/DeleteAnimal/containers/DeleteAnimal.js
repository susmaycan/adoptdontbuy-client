import {connect} from 'react-redux'
import {deleteAnimal} from '../../../actions/animal'
import DeleteAnimalView from '../components/DeleteAnimalView'

const mapStateToProps = state => ({
    animal: state.animalReducer.animal,
    error: state.animalReducer.delete.error,
    errorMsg: state.animalReducer.delete.errorMsg,
    success: state.animalReducer.delete.success,
    isLoading: state.animalReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    deleteAnimal: (animalId) => dispatch(deleteAnimal(animalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAnimalView)
