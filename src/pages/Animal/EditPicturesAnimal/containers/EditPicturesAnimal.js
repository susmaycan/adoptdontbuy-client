import {connect} from 'react-redux'
import {addPictures, deletePicture, editAnimal, fetchAnimal} from '../../../../actions/animal'
import EditPicturesView from '../components/EditPicturesView'

const mapStateToProps = state => ({
    isLoading: state.animalReducer.isLoading,
    error: state.animalReducer.error,
    errorMsg: state.animalReducer.errorMsg,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
    animal: state.animalReducer.animal
})

const mapDispatchToProps = (dispatch) => ({
    editAnimal: (animal) => dispatch(editAnimal(animal)),
    addPictures: (animal, files) => dispatch(addPictures(animal, files)),
    deletePicture: (animal, url) => dispatch(deletePicture(animal, url)),
    getAnimal: (animalId) => dispatch(fetchAnimal(animalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPicturesView);
