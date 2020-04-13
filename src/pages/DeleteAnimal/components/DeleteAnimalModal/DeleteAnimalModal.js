import React from 'react'
import {
    Col,
    Modal,
    Row
} from 'react-bootstrap'

const DeleteAnimalModal = ({show, handleClose, handleShow, error, errorMsg, handleSubmit, isLoading}) => (

    <Modal show={show} onHide={handleClose} className="login_modal" animation={true}>
        <div className="modal_title_bg">
            <h2 className="modal-title text-center subtitle">
                DELETE ANIMAL
                <button type="button" className="close" onClick={handleClose}>&times;</button>
            </h2>
        </div>
        <Modal.Body>
            <div>
                <p>You are about to delete the animal...
                    Are you 100% sure?</p>
            </div>
            <Row>
                <Col>
                    <button className="button delete" onClick={handleSubmit}>Yes</button>
                </Col>
                <Col>
                    <button className="button" onClick={handleClose}>No</button>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
)

DeleteAnimalModal.propTypes = {
    //TODO
}
export default DeleteAnimalModal
