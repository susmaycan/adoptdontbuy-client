import React from 'react'
import {
    Col,
    Image,
    Row
} from 'react-bootstrap'
import './AnimalResult.scss'
import Gender from '../../../../components/Gender'
import Location from '../../../../components/Location'
import Button from '../../../../components/Button'
import {Translate} from "react-redux-i18n";
import {buttonTypes} from "../../../../constants";

const AnimalResult = ({animal}) => (
    <div key={animal._id} className="animal_container">
        <Row>
            <Col>
                <Image
                    rounded
                    className="profile_image rounded"
                    alt={"Picture of " + animal.name}
                    src={animal.picture !== undefined ? animal.picture[0] : ''}
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
                >
                    <i className="fas fa-info-circle"/> <Translate value={buttonTypes.INFO}/>
                </Button>
            </Col>
        </Row>

    </div>
)

export default AnimalResult
