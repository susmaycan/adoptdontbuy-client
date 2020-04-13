import React from 'react'
import {Link} from 'react-router-dom'
import {
    Row,
    Col
} from 'react-bootstrap'
import AnimalTable from '../../../../components/Common/Table'
import Badge from '../Badge'
import DeleteAnimal from '../../../DeleteAnimal/containers/DeleteAnimal'

const Animal = ({animal, user, deleteAnimal}) => (
    <div className="container_div">
        <div className="centered">
            <h1 className="title">{animal.name}</h1>
        </div>
        <Row>
            <Col>
                <div className="info">
                    <AnimalTable
                        elements={[
                            {name: 'Breed', value: animal.breed},
                            {name: 'Specie', value: animal.specie},
                            {name: 'Size', value: animal.size},
                            {name: 'Age', value: animal.yearBorn},
                            {name: 'Gender', value: animal.gender},
                            {
                                name: 'Location', value: {
                                    province: animal.province,
                                    region: animal.region,
                                    city: animal.city,
                                    country: animal.country
                                }
                            },
                            {name: 'Owner', value: animal.owner !== undefined ? animal.owner : ''},
                        ]}
                        title='Animal information'
                    />
                    <br/>
                    <AnimalTable
                        elements={[
                            {name: 'Social level', value: animal.socialLevel},
                            {name: 'Energy level', value: animal.energyLevel},
                            {name: 'Trauma level', value: animal.traumaLevel}
                        ]}
                        title='Additional data'
                    />

                    <Row>
                        <Badge
                            elements={[
                                {name: 'Castrated', value: animal.castrated},
                                {name: 'Vaccinated', value: animal.vaccinated},
                                {name: 'Along with dogs', value: animal.alongWithDogs},
                                {name: 'Along with cats', value: animal.alongWithCats},
                                {name: 'Along with kids', value: animal.alongWithKids},
                            ]}
                        />
                    </Row>
                </div>
            </Col>
            <Col className="centered">

                <div className="animal_pic_div">
                    <img className="animal_picture_detail" alt={"Picture of " + animal.name} src={animal.picture}/>
                </div>
            </Col>
        </Row>

        <div className="centered">

            {animal.about !== "unknown" ?
                <div className="about">
                    <h3 className="subtitle">Story</h3>
                    <hr/>
                    <p>{animal.about}</p>
                </div>
                :
                ""}

            {
                user !== null && animal.owner !== undefined && user._id === animal.owner._id ?
                    <>
                        <Link className="button" to={{pathname: `/updateAnimal/${animal._id}`}}>
                            <i className="fas fa-edit"/> Edit details
                        </Link>

                        <DeleteAnimal
                            redirect={deleteAnimal}
                        />
                    </>
                    :
                    <button className="button"><i className="fas fa-envelope" /> Request adoption</button>
            }
        </div>
    </div>
);


export default Animal
