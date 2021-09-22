import { connect } from 'react-redux'
import { fetchAnimals } from '../../../actions/animalList'
import { getToken } from '../../../actions/user'
import Homepage from '../components/HomeView'

const mapStateToProps = (state) => ({
  animals: state.animalListReducer.animals || [],
  isLoading: state.animalListReducer.isLoading,
  error: state.animalListReducer.error,
  user: state.loginReducer.user,
  isLoggedIn: state.loginReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(getToken()),
  getAnimals: () => dispatch(fetchAnimals()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
