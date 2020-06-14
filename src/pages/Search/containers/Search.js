import {connect} from 'react-redux'
import {filter} from '../../../actions/animalList'
import Search from '../components'

const mapStateToProps = state => ({
    animalList: state.animalListReducer.filteredList,
    isLoading: state.animalListReducer.isLoading,
    error: state.animalListReducer.error
})

const mapDispatchToProps = (dispatch) => ({
    filterAnimals: (query) => dispatch(filter(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
