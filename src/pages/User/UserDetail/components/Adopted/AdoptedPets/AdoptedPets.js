import React from 'react'
import {Translate} from 'react-redux-i18n'
import {sortByUpdateDate} from "../../../../../../utils/Functions";
import {AnimalCard, Box, Message, Subtitle} from '../../../../../../components'

const AdoptedPets = ({user, animals, isLoading, error, isLoggedIn, loggedUser}) => (
    <Box>
        <div className="tab-title-container">
            <Subtitle>
                <Translate value='userDetail.tabs.adopted'/>
            </Subtitle>
        </div>
        {animals === undefined || animals.length === 0 ?
            <Message>
                <Translate value='messages.emptyList'/>
            </Message>
            :
            <div className="columns is-multiline is-centered">
                {sortByUpdateDate(animals).map(animal =>
                    <div key={animal._id} className="column is-narrow">
                        <AnimalCard
                            animal={animal}
                            isLoggedIn={isLoggedIn}
                            user={loggedUser}
                            editMode={true}
                        />
                    </div>
                )}
            </div>
        }
    </Box>
)

export default AdoptedPets
