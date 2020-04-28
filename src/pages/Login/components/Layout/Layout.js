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
                showLogin={showLogin}
                handleCloseLogin={handleCloseLogin}
                handleShowLogin={openModalLogin}
                openModalSignUp={openModalSignUp}
                handleSubmit={props.loginUser}
                error={props.error}
                errorMsg={props.errorMsg}
                isLoading={props.isLoading}
                recoverPassword={openModalRecoverPassword}
            />

            <SignUp
                showLogin={showLogin}
                openModalLogin={openModalLogin}
                showSignUp={showSignUp}
                handleCloseSignUp={handleCloseSignUp}
                handleShowSignUp={openModalSignUp}
                handleSubmit={props.signUpUser}
                error={props.error}
                isLoading={props.isLoading}
            />

            <RecoverPassword
                show={showRecoverPassword}
                openModalLogin={openModalLogin}
                handleClose={handleCloseRecoverPass}
                errorMsg={props.errorMsg}
                handleSubmit={props.recoverPassword}
                error={props.error}
                isLoading={props.isLoading}
            />
        </>
    );
}

export default Layout
