import React, {useState} from 'react';
import LoginModal from '../LoginModal';
import Button from '../../../../components/Common/Button'
import SignUpModal from '../SignUpModal'

function Layout(props) {

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    const openModalSignUp = () => {
        handleShowSignUp();
        handleCloseLogin();
    }
    const openModalLogin = () => {
        handleCloseSignUp();
        handleShowLogin();
    }


    return (
        <>
            <Button
                type="login"
                onAction={handleShowLogin}
            />

            <LoginModal
                showLogin={showLogin}
                handleCloseLogin={handleCloseLogin}
                handleShowLogin={openModalLogin}
                openModalSignUp={openModalSignUp}
                handleSubmit={props.loginUser}
                error={props.error}
                errorMsg={props.errorMsg}
                isLoading={props.isLoading}
            />

            <SignUpModal
                showLogin={showLogin}
                openModalLogin={openModalLogin}
                showSignUp={showSignUp}
                handleCloseSignUp={handleCloseSignUp}
                handleShowSignUp={openModalSignUp}
                handleSubmit={props.signUpUser}
                error={props.error}
                isLoading={props.isLoading}
            />
        </>
    );
}

export default Layout
