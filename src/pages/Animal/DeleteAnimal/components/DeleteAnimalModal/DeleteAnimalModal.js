import React from 'react'
import {Translate} from 'react-redux-i18n'
import Modal from "../../../../../components/Modal";
import {buttonTypes} from "../../../../../constants";
import Button from "../../../../../components/Button";
import PropTypes from 'prop-types'

const DeleteAnimalModal = ({show, handleClose, handleSubmit}) => (

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
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default DeleteAnimalModal
