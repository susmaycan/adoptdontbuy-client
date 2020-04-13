import { connect } from 'react-redux'
import {
    fetchAnimal
} from '../../../actions/animal'
import Animal from '../components/AnimalDetailView'

const mapStateToProps = state => ({
    animal: state.animalReducer.animal,
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.error,
    errorMsg: state.animalReducer.errorMsg,
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    getAnimal: (id) => dispatch(fetchAnimal(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
