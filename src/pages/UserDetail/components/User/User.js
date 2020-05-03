import React from 'react'
import UserInformation from '../UserInformation'
import PetsByUser from '../PetsByUser'
import ContactInfo from '../ContactInfo'
import Reviews from '../Reviews'
import Favourites from '../Favourites'
import {Translate} from 'react-redux-i18n'
import './User.scss'
import Container from '../../../../components/Container'

const tabList = [
    {
        'name': 'user',
        'tabName': 'account',
        'component': '',
    },
    {
        'name': 'pets',
        'tabName': 'pets',
        'component': '',
    },
    {
        'name': 'contact',
        'tabName': 'contact',
        'component': '',
    },
    {
        'name': 'reviews',
        'tabName': 'reviews',
        'component': '',
    },
    {
        'name': 'fav',
        'tabName': 'favourites',
        'component': '',
    },
]

class User extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            activeTab: tabList[0].name
        }
    }

    changeActiveTab(e, name) {
        e.preventDefault()
        this.setState({
            activeTab: name
        })
    }

    renderContent() {
        const {user, loggedUser, animalList, isLoadingList, errorList, favourites, isLoggedIn} = this.props
        switch (this.state.activeTab) {
            case 'user':
            default:
                return (
                    <UserInformation
                        user={user}
                        loggedUser={loggedUser}
                    />
                )
            case 'pets':
                return (
                    <PetsByUser
                        user={user}
                        loggedUser={loggedUser}
                        isLoggedIn={isLoggedIn}
                        animals={animalList}
                        isLoading={isLoadingList}
                        error={errorList}
                    />)
            case 'contact':
                return (
                    <ContactInfo
                        user={user}
                        loggedUser={loggedUser}
                    />
                )
            case 'reviews':
                return (
                    <Reviews
                        user={user}
                        loggedUser={loggedUser}
                    />
                )
            case 'fav':
                return (
                    <Favourites
                        user={user}
                        loggedUser={loggedUser}
                        animals={favourites}
                        isLoading={isLoadingList}
                        error={errorList}
                    />
                )
        }
    }

    render() {
        return (
            <Container>
                <div className="tabs is-centered">
                    <ul>
                        {tabList.map(tab =>
                            <li className={this.state.activeTab === tab.name && "is-active"}><a
                                onClick={(e) => this.changeActiveTab(e, tab.name)}><Translate
                                value={"userDetail.tabs." + tab.tabName}/></a></li>)
                        }
                    </ul>
                </div>
                {this.renderContent()}
            </Container>
    )
    }
    }

    export default User
