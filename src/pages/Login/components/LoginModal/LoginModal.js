import React from 'react'
import {
    Modal
} from 'react-bootstrap'
import LoginForm from '../LoginForm'

const LoginModal = ({ showLogin, handleCloseLogin, openModalSignUp, error, errorMsg, handleSubmit, isLoading }) => (
    <>
        <Modal show={showLogin} onHide={handleCloseLogin} className="login_modal" animation={true}>
            <div className="modal_title_bg">
                <h2 className="modal-title text-center subtitle">
                    <> </> LOGIN
              <button type="button" className="close" onClick={handleCloseLogin}>&times;</button>
                </h2>
            </div>
            <Modal.Body>
                <LoginForm
                    loginError={error}
                    errorMsg={errorMsg}
                    openModalSignUp={openModalSignUp}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    handleCloseLogin={handleCloseLogin}
                />
            </Modal.Body>
        </Modal>
    </>
)

LoginModal.propTypes = {
    //TODO
}
export default LoginModal
