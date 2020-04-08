import React from 'react'
import {
    Badge
} from 'react-bootstrap'

const BadgeCharacteristics = ({ elements, title }) => (
    <div>
        {
            elements.map(element => {
                if (element.value) {
                    return (
                        <Badge key={element.name} className="bagdeCustom" variant="success">{element.name} <i className="fas fa-check-circle"></i></Badge>
                    )
                } else {
                    return (
                        <Badge key={element.name}  className="bagdeCustom" variant="danger"> {element.name} <i className="fas fa-times-circle" ></i></Badge>
                    )
                }
            })
        }
    </div>
);


export default BadgeCharacteristics