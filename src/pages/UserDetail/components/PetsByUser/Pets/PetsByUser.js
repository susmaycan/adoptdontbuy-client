import React from 'react'
import {Translate} from 'react-redux-i18n'
import {sortByUpdateDate} from "../../../../../utils/Functions";
import {AnimalCard, Message, Subtitle, Box} from '../../../../../components'

const PetsByUser = ({user, animals, isLoading, error, isLoggedIn, loggedUser}) => (
    <Box>
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
                    <div key={animal._id} className="column is-narrow">
                        <AnimalCard
                            animal={animal}
                            user={user}
                            isLoggedIn={isLoggedIn}
                        />
                    </div>
                )}
            </div>
        }
    </Box>
)

export default PetsByUser