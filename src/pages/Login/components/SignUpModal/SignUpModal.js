import React from 'react'
import {
    Modal
} from 'react-bootstrap'
import SignUpForm from '../SignUpForm'

const SignUpModal = ({ handleCloseSignUp, showSignUp, handleShowSignUp, error, handleSubmit, isLoading, openModalLogin }) => (
    <>
        <Modal show={showSignUp} onHide={handleCloseSignUp} animation={true}>
            <div className="modal_title_bg">
                <h2 className="modal-title text-center subtitle"><i className="fas fa-sign-in-alt white" />
                    SIGNUP
                    <button type="button" className="close" onClick={handleCloseSignUp}>&times;</button>
                </h2>
            </div>

            <Modal.Body>
                <SignUpForm
                    error={error}
                    openModalSignUp={handleShowSignUp}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    handleCloseSignUp={handleCloseSignUp}
                    openModalLogin={openModalLogin}
                />
            </Modal.Body>
        </Modal>
    </>
)

SignUpModal.propTypes = {
    //TODO
}
export default SignUpModal
