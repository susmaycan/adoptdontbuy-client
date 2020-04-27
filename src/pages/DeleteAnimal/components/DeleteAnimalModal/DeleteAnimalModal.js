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
        <Row>
            <Col>
                <Button
                    onAction={handleSubmit}
                    danger={true}
                >
                    <Translate value={buttonTypes.CONFIRM}/>
                </Button>
            </Col>
            <Col>
                <Button
                    onAction={handleClose}
                >
                    <Translate value={buttonTypes.CANCEL}/>
                </Button>
            </Col>
        </Row>

    </Modal>
)

DeleteAnimalModal.propTypes = {
    //TODO
}
export default DeleteAnimalModal
