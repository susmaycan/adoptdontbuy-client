import {Link} from 'react-router-dom';
import React from 'react';
import Button from '../../../../components/Button'
import './NavigationBar.scss'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from '../../../../constants'
import PropTypes from 'prop-types'

const NavigationBar = ({isActive, isLoggedIn, user, setIsActive, logout}) => (

    <nav className="navbar navigation-bar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item important brand-link" to="/">
                <i className="fas fa-paw"/>
                &nbsp;
                adoptdontbuy
            </Link>
            <a
                onClick={setIsActive}
                role="button"
                href="/#"
                className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                aria-label="menu" aria-expanded="false"
                data-target="navigationBar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
            id="navigationBar">
            <div className="navbar-end">
                <Link className="navbar-item" to="/search">
                    <i className="fas fa-search"/>
                    &nbsp;
                    <Translate value="nav-bar.search"/>
                </Link>
                {isLoggedIn ?
                    <React.Fragment>
                        <Link className="navbar-item" to="/addAnimal">
                            <i className="fas fa-plus-circle"/>
                            &nbsp;
                            <Translate value="nav-bar.addAnimal"/>
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-link" to={{pathname: `/user/${user._id}`}}>
                                {user.picture === "unknown" || user.picture === undefined ?
                                    <img alt="Account's avatar" className="little-image"
                                         src={'https://api.adorable.io/avatars/24/' + user.username}/>
                                    :
                                    <img alt="Account's avatar" className="little-image" src={user.picture}/>
                                }
                                &nbsp;&nbsp;
                                <Translate value="nav-bar.account"/>
                            </Link>

                            <div className="navbar-dropdown is-right">
                                <Link className="navbar-item"
                                      to={{pathname: `/user/${user._id}/pets`}}>
                                    <Translate value="nav-bar.pets"/>
                                </Link>
                                <Link className="navbar-item"
                                      to={{pathname: `/user/${user._id}/fav`}}>
                                    <Translate value="nav-bar.favourites"/>
                                </Link>
                                <Link className="navbar-item"
                                      to={{pathname: `/user/${user._id}/reviews`}}>
                                    <Translate value="nav-bar.reviews"/>
                                </Link>
                                <hr className="navbar-divider"/>
                                {/*<a className="navbar-item">*/}
                                {/*    <i className="fas fa-cog"/>&nbsp;&nbsp;<Translate value="nav-bar.settings"/>*/}
                                {/*</a>*/}
                                <a href="/#" className="navbar-item" onClick={logout}>
                                    <i className="fas fas fa-sign-out-alt"/>&nbsp;&nbsp;<Translate
                                    value={buttonTypes.LOGOUT}/>
                                </a>
                            </div>
                        </div>
                    </React.Fragment>

                    :
                    <div className="navbar-item">
                        <Button
                            submit={true}
                            url={'/login'}
                        >
                            <i className="fas fa-sign-in-alt"/>&nbsp;&nbsp;<Translate
                            value={buttonTypes.LOGIN}/>
                        </Button>
                    </div>
                }
            </div>
        </div>
    </nav>
)
NavigationBar.propTypes = {
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

export default NavigationBar
