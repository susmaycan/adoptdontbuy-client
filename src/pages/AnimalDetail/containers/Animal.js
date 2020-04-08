import { connect } from 'react-redux'
import {
    getAnimal
} from '../../../actions/Animal'
import Animal from '../components/AnimalDetailView'

const mapStateToProps = state => ({
    animal: state.animalReducer.animal,
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.error,
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    getAnimal: (id) => dispatch(getAnimal(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
