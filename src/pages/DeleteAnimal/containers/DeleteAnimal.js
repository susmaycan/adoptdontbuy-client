import { connect } from 'react-redux'
import {
    deleteAnimal
} from '../../../actions/animal'
import DeleteAnimalView from '../components/DeleteAnimalView'

const mapStateToProps = state => ({
    animal: state.animalReducer.animal,
    error: state.animalReducer.error,
    errorMsg: state.animalReducer.errorMsg,
    isLoading: state.animalReducer.isLoading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteAnimal: (animalId) => dispatch(deleteAnimal(animalId)),
    redirect: () => ownProps.redirect()
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAnimalView)
