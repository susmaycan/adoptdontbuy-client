import React from 'react'
import LoginForm from '../LoginForm'
import Modal from '../../../../../components/Modal'
import PropTypes from 'prop-types'

const LoginModal = ({show, handleClose, openSignUp, error, errorMsg, handleSubmit, isLoading, recoverPassword}) => (
    <Modal
        show={show}
        handleClose={handleClose}
        title='login.title'
       >
        <LoginForm
            loginError={error}
            errorMsg={errorMsg}
            openModalSignUp={openSignUp}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            handleCloseLogin={handleClose}
            recoverPassword={recoverPassword}
        />
    </Modal>
)

LoginModal.propTypes = {
    show: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    openSignUp: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    recoverPassword: PropTypes.func.isRequired,
}
export default LoginModal
