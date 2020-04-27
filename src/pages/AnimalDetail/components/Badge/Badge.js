import React from 'react'
import {
    Badge
} from 'react-bootstrap'
import {Translate} from 'react-redux-i18n'
import './Badge.scss'

const BadgeCharacteristics = ({elements}) => (
    <div>
        {
            elements.map(element => {
                if (element.value) {
                    return (
                        <Badge key={element.name} className="badge-custom" variant="success"><Translate
                            value={'animal.' + element.name}/> <i className="fas fa-check-circle"/></Badge>
                    )
                } else {
                    return (
                        <Badge key={element.name} className="badge-custom" variant="danger"><Translate
                            value={'animal.' + element.name}/> <i className="fas fa-times-circle"/></Badge>
                    )
                }
            })
        }
    </div>
)
export default BadgeCharacteristics
