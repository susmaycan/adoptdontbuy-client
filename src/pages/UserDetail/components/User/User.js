import React from 'react'
import {
    Tabs,
    Tab,
} from 'react-bootstrap'

import UserInformation from '../UserInformation'
import PetsByUser from '../PetsByUser'
import ContactInfo from '../ContactInfo'
import Reviews from '../Reviews'
import Favourites from '../Favourites'
import {I18n} from 'react-redux-i18n'
import './User.scss'
import Container from '../../../../components/Container'
const User = ({user, loggedUser, animalList, isLoadingList, errorList, favourites, isLoggedIn}) => (
    <Container>
        <Tabs id="user_info">
            <Tab eventKey="account" title={I18n.t('userDetail.tabs.account')}>
                <UserInformation
                    user={user}
                    loggedUser={loggedUser}
                />
            </Tab>
            <Tab eventKey="pets" title={I18n.t('userDetail.tabs.pets')}>
                <PetsByUser
                    user={user}
                    loggedUser={loggedUser}
                    isLoggedIn={isLoggedIn}
                    animals={animalList}
                    isLoading={isLoadingList}
                    error={errorList}
                />
            </Tab>
            <Tab eventKey="contact" title={I18n.t('userDetail.tabs.contact')}>
                <ContactInfo
                    user={user}
                    loggedUser={loggedUser}
                />
            </Tab>
            <Tab eventKey="reviews" title={I18n.t('userDetail.tabs.reviews')}>
                <Reviews
                    user={user}
                    loggedUser={loggedUser}
                />
            </Tab>
            <Tab eventKey="favourites" title={I18n.t('userDetail.tabs.favourites')}>
                <Favourites
                    user={user}
                    loggedUser={loggedUser}
                    animals={favourites}
                    isLoading={isLoadingList}
                    error={errorList}
                />
            </Tab>
        </Tabs>
    </Container>
)
export default User
