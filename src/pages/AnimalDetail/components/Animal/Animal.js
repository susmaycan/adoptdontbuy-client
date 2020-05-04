import React from 'react'
import {
    Table,
    Contact,
    Button,
    Title,
    Subtitle,
    Box
} from '../../../../components'
import DeleteAnimal from '../../../DeleteAnimal'
import {Translate} from 'react-redux-i18n'
import './Animal.scss'
import AnimalPicture from '../AnimalPicture'
import Badge from '../Badge'
import {buttonTypes, tableElements} from '../../../../constants'
import {isOwner} from '../../../../utils/Functions'

const Animal = ({animal, user, deleteAnimal}) => (
    <Box>
        <Title>
            {animal.name}
        </Title>
        <div className="columns is-centered">
            <div className="column is-narrow is-offset-7">
                {isOwner(user, animal.owner) ?
                    <div className="centered">
                        <Button
                            url={`/updateAnimal/${animal._id}`}
                        >
                            <i className="fas fa-edit"/> <Translate value={buttonTypes.EDIT}/>
                        </Button>
                        <Button
                            url={`/editPictures/${animal._id}`}
                        >
                            <i className="fas fa-edit"/> <Translate value={buttonTypes.EDIT_PICTURES}/>
                        </Button>
                        <DeleteAnimal
                            redirect={deleteAnimal}
                        />
                    </div>
                    :
                    <Contact emailDst={animal.owner !== undefined ? animal.owner.email : ''} animalName={animal.name}/>
                }
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <div className="animal-information">
                    <Table
                        elements={[
                            {name: tableElements.BREED, value: animal.breed},
                            {name: tableElements.SPECIE, value: animal.specie},
                            {name: tableElements.SIZE, value: animal.size},
                            {name: tableElements.AGE, value: animal.age},
                            {name: tableElements.GENDER, value: animal.gender},
                            {
                                name: tableElements.LOCATION, value: {
                                    province: animal.province,
                                    region: animal.region,
                                    city: animal.city,
                                    country: animal.country
                                }
                            },
                            {name: tableElements.OWNER, value: animal.owner !== undefined ? animal.owner : ''},
                            {name: tableElements.CREATED_AT, value: animal.createdAt}
                        ]}
                        title='animalInformation'
                        type={tableElements.ANIMAL_TYPE}
                    />
                    <br/>
                    <Table
                        elements={[
                            {name: tableElements.SOCIAL_LEVEL, value: animal.socialLevel},
                            {name: tableElements.ENERGY_LEVEL, value: animal.energyLevel},
                            {name: tableElements.TRAUMA_LEVEL, value: animal.traumaLevel}
                        ]}
                        title='additionalData'
                        type={tableElements.ANIMAL_TYPE}
                    />
                    <div className="columns is-multiline is-centered">
                        <Badge
                            elements={[
                                {name: 'castrated', value: animal.castrated},
                                {name: 'vaccinated', value: animal.vaccinated},
                                {name: 'alongWithDogs', value: animal.alongWithDogs},
                                {name: 'alongWithCats', value: animal.alongWithCats},
                                {name: 'alongWithKids', value: animal.alongWithKids},
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="column">
                <AnimalPicture name={animal.name} pictures={animal.picture}/>
            </div>
        </div>

        <div className="centered">
            {animal.about !== "unknown" ?
                <div className="animal-about">
                    <Subtitle><Translate value={'animalDetail.story'}/></Subtitle>
                    <hr/>
                    <p>{animal.about}</p>
                </div>
                :
                ""}
        </div>
    </Box>
)
export default Animal
