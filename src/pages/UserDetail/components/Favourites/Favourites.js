import React from 'react'
import AnimalResult from '../AnimalResult'
import Message from '../../../../components/Message'
import {Translate} from 'react-redux-i18n'
import Subtitle from "../../../../components/Subtitle";
import {sortByUpdateDate} from "../../../../utils/Functions";

const Favourites = ({animals}) => (
    <div>
        <div className="tab-title-container">
            <Subtitle>
                <Translate value='tabs.favourites'/>
            </Subtitle>
        </div>
        {animals.length === 0 ?
            <Message>
                <Translate value='messages.emptyList'/>
            </Message>
            :
            <div>
                {sortByUpdateDate(animals).map(animal =>
                    <AnimalResult
                        key={animal._id}
                        animal={animal}
                    />
                )}
            </div>
        }
    </div>
)
export default Favourites
