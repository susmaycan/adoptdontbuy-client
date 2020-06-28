import React, {Component} from 'react';
import {Box, Loading, Message, Title} from "../../../../../components";
//import {Translate} from "react-redux-i18n";
import EditPictures from '../EditPictures'
import PropTypes from 'prop-types'

class EditPicturesView extends Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        animal: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        loggedUser: PropTypes.object.isRequired,
        editAnimal: PropTypes.func.isRequired,
        addPictures: PropTypes.func.isRequired,
        deletePicture: PropTypes.func.isRequired,
        getAnimal: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    deletePicture = (pic) => {
        this.props.deletePicture(this.props.animal, pic)
    }


    uploadPictures = (e) => {
       this.props.addPictures(this.props.animal, e.target.files)
    }

    componentDidMount() {
        this.props.getAnimal(this.props.match.params.animalId)
    }

    render() {

        if (!this.props.isLoggedIn) {
            return (
                <Message>Sorry, you need to be registered to be this page.</Message>
            )
        }

        if (this.props.isLoading) {
            return (
                <Loading/>
            )
        }

        if (this.props.error) {
            return (
                <Message>Sorry, there was an error and we couldn't retrieve this animal.</Message>
            )
        }

        if (this.props.isLoggedIn && this.props.animal !== undefined && this.props.loggedUser._id !== this.props.animal.owner._id) {
            return (
                <Message>Sorry, you <strong>cannot</strong> edit this animal.</Message>
            )
        }

        return (
            <Box>
                <Title>
                    <i className="fas fa-plus-circle"/>
                    {' '}
                    Edit pictures of {this.props.animal.name}
                </Title>
                <EditPictures
                    animal={this.props.animal}
                    deletePicture={this.deletePicture}
                    uploadPictures={this.uploadPictures}/>
            </Box>
        )
    }


}

export default EditPicturesView
