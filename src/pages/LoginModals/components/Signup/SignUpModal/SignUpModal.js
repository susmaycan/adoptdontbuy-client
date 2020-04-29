import React from 'react'
import SignUpForm from '../SignUpForm'
import Modal from '../../../../../components/Modal'
import PropTypes from 'prop-types'


const SignUpModal = ({handleClose, show, handleShow, error, handleSubmit, isLoading, openLogin, errorMsg}) => (
    <Modal
        show={show}
        handleClose={handleClose}
        title='sign-up.title'
    >
        <SignUpForm
            error={error}
            errorMsg={errorMsg}
            openModalSignUp={handleShow}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            handleClose={handleClose}
            openModalLogin={openLogin}
        />
    </Modal>
)

SignUpModal.propTypes = {
    show: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    openLogin: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}
export default SignUpModal
