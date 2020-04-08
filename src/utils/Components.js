import React from 'react';
import {
    Badge,
    Alert
} from 'react-bootstrap';
import LoginComponent from '../pages/Login';
import { Link } from 'react-router-dom';


export function renderBadgeStatus(status) {
    switch (status) {
        case "00":
            return (
                <Badge className="bagdeCustom" variant="success">In adoption</Badge>
            );
        case "01":
            return (
                <Badge className="bagdeCustom" variant="danger">Adopted</Badge>
            );
        case "02":
            return (
                <Badge className="bagdeCustom" variant="warning">Reserved</Badge>
            );
        default:
            return (
                <Badge className="bagdeCustom" variant="Secondary">Unknown</Badge>
            );
    }
};
export function renderBadgeAnimalCharacteristics(name, bool) {
    if (bool === true) {
        return (<Badge className="bagdeCustom" variant="success">{name} <i className="fas fa-check-circle"></i></Badge>);
    } else if (bool === false) {
        return (<Badge className="bagdeCustom" variant="danger">{name} <i className="fas fa-times-circle"></i></Badge>);
    }
};

export function renderGender(gender) {
    if (gender === "F") {
        return (<>Female <i class="fas fa-venus"></i></>);
    } else if (gender === "M") {
        return (<>Male <i class="fas fa-mars"></i></>);
    } else {
        return ("unkown");
    }
}

export function renderAge(animalBornYear) {
    var actualYear = new Date().getFullYear().toString();
    var bornYear = parseInt(animalBornYear, 10);
    const age = actualYear - bornYear;
    if (age <= 1) {
        return (<>Puppy ({age} years)</>);
    } else if (age => 8) {
        return (<>Senior ({age} years)</>);
    } else if (age > 1 && age < 8) {
        return (<>Adult ({age} years)</>);
    } else {
        return (<>Unknown age</>)
    }
}

export function renderAgeSimplied(animalBornYear) {
    var actualYear = new Date().getFullYear().toString();
    var bornYear = parseInt(animalBornYear, 10);
    const age = actualYear - bornYear;
    if (age <= 1) {
        return (<>Puppy</>);
    }
    else if (age > 1 && age < 8) {
        return (<>Adult</>);

    } else if (age => 8) {
        return (<>Senior</>);
    } else {
        return (<>Unknown age</>)
    }
}

export function alertNoLogin() {
    return (
        <div className="container_div">
            <div className="alertCustom">
                <Alert variant="danger">You need to login to access this page.</Alert>
            </div>
        </div>);
}
export function alertCantAccess() {
    return (
        <div className="container_div">
            <div className="alertCustom">
                <Alert variant="danger">You can't access this page.</Alert>
            </div>
        </div>);
}
export function alertSucess(action, type) {
    return (
        <div className="container_div">
            <div className="alertCustom">
                <Alert variant="success" dismissible>
                    Your {type} was sucessfully {action}! <Link to="/">Go home</Link>.
                </Alert>
                </div>
        </div>);
}
export function alertNoLoginWithLogin(showLogin, handleShowLogin, handleCloseLogin, showSignUp, handleCloseSignUp, handleShowSignUp) {
    return (
        <div className="container_div">
            <div className="alertCustom">
                <Alert variant="danger">You need to <span className="notlink" onClick={handleShowLogin}>login</span> to access this page.</Alert>
                <LoginComponent showLogin={showLogin} handleCloseLogin={handleCloseLogin} handleShowLogin={handleShowLogin} showSignUp={showSignUp} handleCloseSignUp={handleCloseSignUp} handleShowSignUp={handleShowSignUp} />
            </div></div>);
}
