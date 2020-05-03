import React from 'react'
import AnimalResult from '../AnimalResult'
import Message from '../../../../components/Message'
import {Translate} from 'react-redux-i18n'
import Subtitle from "../../../../components/Subtitle";
import {sortByUpdateDate} from "../../../../utils/Functions";
import {AnimalCard} from "../../../../components";

const PetsByUser = ({user, animals, isLoading, error, isLoggedIn, loggedUser}) => (
    <div>
        <div className="tab-title-container">
            <Subtitle>
                {isLoggedIn && loggedUser._id === user._id ?
                    <Translate value='userDetail.petsByMe'/>
                    :
                    <Translate value='userDetail.pets'/>
                }
            </Subtitle>
        </div>
        {animals.length === 0 ?
            <Message>
                <Translate value='messages.emptyList'/>
            </Message>
            :
            <div className="columns is-multiline is-centered">
                {sortByUpdateDate(animals).map(animal =>
                    <div key={animal._id} className="column">
                        <AnimalCard
                            animal={animal}
                        />
                    </div>
                )}
            </div>
        }
    </div>
)

export default PetsByUser
