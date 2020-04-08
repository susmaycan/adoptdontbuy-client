import { connect } from 'react-redux'
import {
    filterAnimals
} from '../../../actions/Animal'
import Search from '../components'

const mapStateToProps = state => ({
    animalList: state.filterReducer.animalList,
    isLoading: state.filterReducer.isLoading,
    error: state.filterReducer.error
})

const mapDispatchToProps = (dispatch) => ({
    filterAnimals: (query) => dispatch(filterAnimals(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
