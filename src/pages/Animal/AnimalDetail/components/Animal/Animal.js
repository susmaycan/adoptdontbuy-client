import React from 'react'
import {Box, Button, Contact, Subtitle, Table} from '../../../../../components'
import DeleteAnimal from '../../../DeleteAnimal'
import {Translate} from 'react-redux-i18n'
import './Animal.scss'
import AnimalPicture from '../AnimalPicture'
import Badge from '../Badge'
import {buttonTypes, tableElements} from '../../../../../constants'
import {isAdopted, isOwner} from '../../../../../utils/Functions'
import MarkAdopt from '../../../MarkAdopt'
import MarkReserved from '../../../MarkReserved'
import PropTypes from 'prop-types'

const Animal = ({animal, user}) => (
    <Box>
        <div className="has-text-centered">
            <h1 className="title">{animal.name}</h1>
        </div>

        <div className="columns">
            <div className="column">
                <div className="animal-information">
                    <Table
                        elements={[
                            {name: tableElements.STATUS, value: animal.status},
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
                {isOwner(user, animal.owner) ?
                    <div className="level centered">
                        {!isAdopted(animal) &&
                        <React.Fragment>
                            <div className="level-item">
                                <MarkAdopt animal={animal}/>
                            </div>
                            <div className="level-item">
                                <MarkReserved animal={animal}/>
                            </div>
                            <div className="level-item">
                                <Button
                                    url={`/updateAnimal/${animal._id}`}
                                    disabled={isAdopted(animal)}
                                >
                                    <i className="fas fa-edit"/>&nbsp;<Translate value={buttonTypes.EDIT}/>
                                </Button>
                            </div>
                            <div className="level-item">
                                <Button
                                    url={`/editPictures/${animal._id}`}
                                    disabled={isAdopted(animal)}
                                >
                                    <i className="fas fa-edit"/>&nbsp;<Translate value={buttonTypes.EDIT_PICTURES}/>
                                </Button>
                            </div>
                        </React.Fragment>
                        }
                        <div className="level-item">
                            <DeleteAnimal>
                                <i className="fas fa-trash-alt"/>&nbsp;<Translate value={buttonTypes.DELETE}/>
                            </DeleteAnimal>
                        </div>
                    </div>
                    :
                    <div className="has-text-centered">
                        <Contact emailDst={animal.owner !== undefined ? animal.owner.email : ''}
                                 animal={animal}/>
                    </div>
                }

                {animal.picture !== undefined &&
                    <AnimalPicture name={animal.name} pictures={animal.picture}/>
                }

            </div>
        </div>

        <div className="centered">
            {animal.about !== "unknown" &&
            <div className="animal-about">
                <Subtitle><Translate value={'animalDetail.story'}/></Subtitle>
                <hr/>
                <p>{animal.about}</p>
            </div>
            }
        </div>
    </Box>
)
Animal.propTypes = {
    animal: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default Animal
