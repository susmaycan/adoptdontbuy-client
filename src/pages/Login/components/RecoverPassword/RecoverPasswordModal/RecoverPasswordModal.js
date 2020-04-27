import React from 'react'
import RecoverPasswordForm from '../RecoverPasswordForm'
import {
    Modal
} from '../../../../../components'

const RecoverPasswordModal = ({show, handleClose, openModalLogin, error, errorMsg, handleSubmit, isLoading}) => (
    <Modal
        show={show}
        handleClose={handleClose}
        title='recoverPassword.title'
       >
        <RecoverPasswordForm
            error={error}
            errorMsg={errorMsg}
            handleClose={handleClose}
            openModalLogin={openModalLogin}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
        />
    </Modal>
)

RecoverPasswordModal.propTypes = {
    //TODO
}
export default RecoverPasswordModal
