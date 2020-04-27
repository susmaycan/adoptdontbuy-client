import React from 'react'
import {
    Col,
    Row
} from 'react-bootstrap'
import {Translate} from 'react-redux-i18n'
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import {buttonTypes} from "../../../../constants";

const DeleteUserModal = ({show, handleClose, handleShow, error, errorMsg, handleSubmit, isLoading}) => (
    <Modal
        show={show}
        handleClose={handleClose}
        title='deleteAnimal.title'
    >
        <div>
            <Translate value='deleteUser.body'/>
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

DeleteUserModal.propTypes = {
    //TODO
}
export default DeleteUserModal
