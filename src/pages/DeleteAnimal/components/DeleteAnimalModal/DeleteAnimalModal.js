import React from 'react'
import {
    Col,
    Row
} from 'react-bootstrap'
import {Translate} from 'react-redux-i18n'
import Modal from "../../../../components/Modal";
import {buttonTypes} from "../../../../constants";
import Button from "../../../../components/Button";

const DeleteAnimalModal = ({show, handleClose, handleShow, error, errorMsg, handleSubmit, isLoading}) => (

    <Modal
        show={show}
        handleClose={handleClose}
        title='deleteAnimal.title'
    >
        <div>
            <Translate value='deleteAnimal.body'/>
        </div>
        <div className="columns">
            <div className="column">
                <Button
                    onAction={handleSubmit}
                    danger={true}
                >
                    <Translate value={buttonTypes.CONFIRM}/>
                </Button>
            </div>
            <div className="column">
                <Button
                    onAction={handleClose}
                >
                    <Translate value={buttonTypes.CANCEL}/>
                </Button>
            </div>
        </div>

    </Modal>
)

DeleteAnimalModal.propTypes = {
    //TODO
}
export default DeleteAnimalModal
