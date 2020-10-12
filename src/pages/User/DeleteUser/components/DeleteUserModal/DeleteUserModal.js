import React from 'react'
import {Translate} from 'react-redux-i18n'
import Modal from "../../../../../components/Modal";
import Button from "../../../../../components/Button";
import {buttonTypes} from "../../../../../constants";
import PropTypes from 'prop-types'

const DeleteUserModal = ({show, handleClose, handleShow, error, errorMsg, handleSubmit, isLoading}) => (
    <Modal
        show={show}
        handleClose={handleClose}
        title='deleteAnimal.title'
    >
        <div>
            <Translate value='deleteUser.body'/>
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
DeleteUserModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleShow: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default DeleteUserModal
