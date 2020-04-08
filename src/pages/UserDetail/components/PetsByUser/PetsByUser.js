import React from 'react'
import AnimalResult from '../AnimalResult'
import Message from '../../../../components/Common/Message'

const PetsByUser = ({user, animals, isLoading, error}) => (
    <div>
        {animals.length === 0 ?
            <Message>This list is empty.</Message>
            :

            animals.map(animal => {
                return (
                    <AnimalResult
                        key={animal._id}
                        animal={animal}
                    />
                )
            })
    }
    </div>
)

export default PetsByUser
