import React, { useContext, useState } from 'react';
import { AuthContext } from "../../App";
import { alertNoLoginWithLogin } from '../../utils/Components';
import AddAnimal from './AddAnimal';

function AddAnimalContainer() {
    const Auth = useContext(AuthContext);
    const [showLogin, setShowLogin] = useState(!Auth.loggedIn.loggedIn);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    const openModal = () => {
        if (Auth.loggedIn.user != null) {
            return (<AddAnimal />)
        } else {
            return (
                alertNoLoginWithLogin(showLogin, handleShowLogin, handleCloseLogin, showSignUp, handleCloseSignUp, handleShowSignUp)
            );
        }
    }
    return (
        openModal()
    );

}
export default AddAnimalContainer;
