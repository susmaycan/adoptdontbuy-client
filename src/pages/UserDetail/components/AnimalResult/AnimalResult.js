import React from 'react'
import {
    Col,
    Image,
    Row
} from 'react-bootstrap'

import Gender from '../../../../components/Common/Gender'
import Location from '../../../../components/Common/Location'
import Button from '../../../../components/Common/Button'

const AnimalResult = ({animal}) => (
    <div key={animal._id} className="animal_container">
        <Row>
            <Col>
                <Image
                    rounded
                    className="profile_image rounded"
                    alt={"Picture of " + animal.name}
                    src={animal.picture}
                />
            </Col>
            <Col>
                <Row>
                    <h2 className="subtitle bold">{animal.name}</h2>
                </Row>
                <Gender
                    gender={animal.gender}
                />
                <Location
                    city={animal.city}
                    province={animal.province}
                    region={animal.region}
                />
            </Col>
            <Col>
                <Button
                    url={`/animal/${animal._id}`}
                    type="info"
                />
            </Col>
        </Row>

    </div>
)

export default AnimalResult
