import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Button from '../../../../components/Button'
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
                    <Link className="navbar-item" to="/addAnimal">
                        <i className="fas fa-plus-circle"/>
                        &nbsp;
                        <Translate value="nav-bar.addAnimal"/>
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link" to={{pathname: `/user/${this.props.user._id}`}}>
                            <Translate value="nav-bar.account"/>
                        </Link>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Pets
                            </a>
                            <a className="navbar-item">
                                Favourites
                            </a>
                            <a className="navbar-item">
                                Reviews
                            </a>
                            <hr className="navbar-divider"/>
                            <a className="navbar-item">
                                <i className="fas fa-cog"/>&nbsp;&nbsp;Settings
                            </a>
                            <a className="navbar-item" onClick={this.logout}>
                                <i className="fas fas fa-sign-out-alt"/>&nbsp;&nbsp;<Translate
                                value={buttonTypes.LOGOUT}/>
                            </a>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div className="navbar-item">
                    <Button
                        submit={true}
                        url={'/login'}
                    >
                        <i className="fas fa-sign-in-alt"/>&nbsp;&nbsp;<Translate value={buttonTypes.LOGIN}/>
                    </Button>
                </div>
            )
        }
    }

    render() {
        return (
                <nav className="navbar navigation-bar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item important brand-link" to="/">
                            <i className="fas fa-paw"/>
                            &nbsp;
                            adoptdontbuy
                        </Link>


                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <Link className="navbar-item" to="/search">
                                <i className="fas fa-search"/>
                                &nbsp;
                                <Translate value="nav-bar.search"/>
                            </Link>
                            {this.isLogged()}
                        </div>
                    </div>
                </nav>
        )
    }
}

export default NavigationBar
