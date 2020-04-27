import React from 'react'
import LoginForm from '../LoginForm'
import Modal from '../../../../../components/Modal'

const LoginModal = ({showLogin, handleCloseLogin, openModalSignUp, error, errorMsg, handleSubmit, isLoading, recoverPassword}) => (
    <Modal
        show={showLogin}
        handleClose={handleCloseLogin}
        title='login.title'
       >
        <LoginForm
            loginError={error}
            errorMsg={errorMsg}
            openModalSignUp={openModalSignUp}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            handleCloseLogin={handleCloseLogin}
            recoverPassword={recoverPassword}
        />
    </Modal>
)

LoginModal.propTypes = {
    //TODO
}
export default LoginModal
