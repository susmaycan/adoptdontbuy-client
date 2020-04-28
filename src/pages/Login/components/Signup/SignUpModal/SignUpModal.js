import React from 'react'
import SignUpForm from '../SignUpForm'
import Modal from "../../../../../components/Modal";


const SignUpModal = ({handleCloseSignUp, showSignUp, handleShowSignUp, error, handleSubmit, isLoading, openModalLogin}) => (
    <Modal
        show={showSignUp}
        handleClose={handleCloseSignUp}
        title='sign-up.title'
    >
        <SignUpForm
            error={error}
            openModalSignUp={handleShowSignUp}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            handleClose={handleCloseSignUp}
            openModalLogin={openModalLogin}
        />
    </Modal>
)

SignUpModal.propTypes = {
    //TODO
}
export default SignUpModal
