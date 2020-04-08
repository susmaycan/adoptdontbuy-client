import { connect } from 'react-redux'
import {
    getAnimals
} from '../../../actions/Animal'
import Homepage from '../components/HomeView'

const mapStateToProps = state => ({
    animals: state.animalListReducer.animals || [],
    isLoading: state.animalListReducer.isLoading,
    error: state.animalListReducer.error,
    user: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    getAnimals: () => dispatch(getAnimals())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
