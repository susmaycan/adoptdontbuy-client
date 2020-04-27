import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import Login from '../../../Login'
import Button from "../../../../components/Button";
import './Navbar.scss'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from "../../../../constants";

class NavigationBar extends Component {

    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout()
    }


    isLogged() {
        if (this.props.isLoggedIn) {
            return (
                <>
                    <Link className="nav-link" to={{pathname: `/user/${this.props.user._id}`}}>
                        {' '}
                        <Translate value="nav-bar.account"/>
                    </Link>
                    <Button
                        submit={true}
                        onAction={this.logout}
                        danger={true}
                    >
                        <i className="fas fas fa-sign-out-alt"/> <Translate value={buttonTypes.LOGOUT}/>
                    </Button>
                </>
            )
        } else {
            return (
                <Login/>
            )
        }
    }

    render() {
        return (
            <>
                <Navbar
                    className="navigation-bar align-items-center"
                    bg="light"
                    expand="lg">
                    <Link className="nav-link important brand-link" to="/">
                        <i className="fas fa-paw"/>
                        {' '}
                        adoptdontbuy
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto align-items-center">
                            <Link className="nav-link" to="/addAnimal">
                                <i className="fas fa-plus-circle"/>
                                {' '}
                                <Translate value="nav-bar.addAnimal"/>
                            </Link>
                            <Link className="nav-link" to="/search">
                                <i className="fas fa-search"/>
                                {' '}
                                <Translate value="nav-bar.search"/>
                            </Link>
                            {this.isLogged()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavigationBar
