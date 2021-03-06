import {connect} from 'react-redux'
import {deleteAnimal} from '../../../../actions/animal'
import DeleteAnimalView from '../components/DeleteAnimalView'

const mapStateToProps = (state, ownProps) => ({
    animal: state.animalReducer.animal,
    error: state.animalReducer.delete.error,
    errorMsg: state.animalReducer.delete.errorMsg,
    success: state.animalReducer.delete.success,
    isLoading: state.animalReducer.isLoading,
    user: state.loginReducer.user,
    children: ownProps.children
})

const mapDispatchToProps = (dispatch) => ({
    deleteAnimal: (animalId, userId) => dispatch(deleteAnimal(animalId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAnimalView)
