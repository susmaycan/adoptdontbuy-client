import React, {useState} from 'react';
import Login from '../Login';
import Button from '../../../../components/Button'
import SignUp from '../Signup'
import {buttonTypes} from "../../../../constants";
import {Translate} from 'react-redux-i18n'
import RecoverPassword from '../RecoverPassword'

function Layout(props) {
    const [showLogin, setShowLogin] = useState(false)
    const handleCloseLogin = () => setShowLogin(false)
    const handleShowLogin = () => setShowLogin(true)

    const [showSignUp, setShowSignUp] = useState(false)
    const handleCloseSignUp = () => setShowSignUp(false)
    const handleShowSignUp = () => setShowSignUp(true)

    const [showRecoverPassword, setRecoverPassword] = useState(false)
    const handleCloseRecoverPass = () => setRecoverPassword(false)
    const handleShowRecoverPass = () => setRecoverPassword(true)

    const openModalSignUp = () => {
        handleShowSignUp()
        handleCloseRecoverPass()
        handleCloseLogin()
    }
    const openModalLogin = () => {
        handleCloseSignUp()
        handleCloseRecoverPass()
        handleShowLogin()
    }

    const openModalRecoverPassword = () => {
        handleCloseLogin()
        handleCloseSignUp()
        handleShowRecoverPass()
    }


    return (
        <>
            <Button
                submit={true}
                onAction={handleShowLogin}
            >
                <i className="fas fa-sign-in-alt"/>&nbsp;&nbsp;<Translate value={buttonTypes.LOGIN}/>
            </Button>
            <Login
                show={showLogin}
                handleClose={handleCloseLogin}
                handleShowLogin={openModalLogin}
                openSignUp={openModalSignUp}
                handleSubmit={props.loginUser}
                error={props.login.error}
                errorMsg={props.login.errorMsg}
                isLoading={props.isLoading}
                recoverPassword={openModalRecoverPassword}
            />

            <SignUp
                openLogin={openModalLogin}
                show={showSignUp}
                handleClose={handleCloseSignUp}
                handleShow={openModalSignUp}
                handleSubmit={props.signUpUser}
                error={props.signup.error}
                errorMsg={props.signup.errorMsg}
                isLoading={props.isLoading}
            />

            <RecoverPassword
                show={showRecoverPassword}
                openModalLogin={openModalLogin}
                handleClose={handleCloseRecoverPass}
                errorMsg={props.recover.errorMsg}
                handleSubmit={props.recoverPassword}
                error={props.recover.error}
                isLoading={props.isLoading}
            />
        </>
    );
}

export default Layout
