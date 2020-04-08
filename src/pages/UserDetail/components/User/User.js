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

const User = ({user, loggedUser, animalList, isLoadingList, errorList, favourites}) => (
    <div className="container_div">
        <Tabs id="user_info">
            <Tab eventKey="account" title="Account">
                <UserInformation
                    user={user}
                    loggedUser={loggedUser}
                />
            </Tab>
            <Tab eventKey="pets" title="Pets">
                <PetsByUser
                    user={user}
                    loggedUser={loggedUser}
                    animals={animalList}
                    isLoading={isLoadingList}
                    error={errorList}
                />
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <ContactInfo
                    user={user}
                    loggedUser={loggedUser}
                />
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <Reviews
                    user={user}
                    loggedUser={loggedUser}
                />
            </Tab>
            <Tab eventKey="favourites" title="Favourites">
                <Favourites
                    user={user}
                    loggedUser={loggedUser}
                    animals={favourites}
                    isLoading={isLoadingList}
                    error={errorList}
                />
            </Tab>
        </Tabs>
    </div>
)
export default User