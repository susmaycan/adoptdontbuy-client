import React, {Component} from 'react';
import {Box, Message, Loading, Title} from "../../../../components";
//import {Translate} from "react-redux-i18n";
import EditPictures from '../EditPictures'

class EditPicturesView extends Component {

    constructor(props) {
        super(props)

        this.deletePicture = this.deletePicture.bind(this)
        this.uploadPictures = this.uploadPictures.bind(this)
    }


    deletePicture(pic) {
        this.props.deletePicture(this.props.animal, pic)
    }


    uploadPictures(event) {
       this.props.addPictures(this.props.animal, event.target.files)
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
