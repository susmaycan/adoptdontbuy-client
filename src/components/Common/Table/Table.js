import React from 'react'
import Gender from '../../Common/Gender'
import Location from '../../Common/Location'
import {
    Table,
    ProgressBar
} from 'react-bootstrap'
import Age from '../../Common/Age';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

const CustomTable = ({elements, title}) => (
    <div>
        <h3 className="subtitle">{title}</h3>
        <Table responsive>
            <tbody>
            {elements.map(element => {
                switch (element.name) {
                    case 'Gender':
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td className="cap">
                                    <Gender
                                        gender={element.value}
                                    />
                                </td>
                            </tr>
                        )
                    case 'Age':
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td className="cap">
                                    <Age
                                        yearBorn={element.value}
                                    />
                                </td>
                            </tr>
                        )
                    case 'Location':
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td className="cap">
                                    <Location
                                        province={element.value.province}
                                        region={element.value.region}
                                        city={element.value.city}
                                        country={element.value.country}
                                    />
                                </td>
                            </tr>
                        )
                    case 'Type':
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td className="cap">
                                    {element.value === true ?
                                        'Animal Shelter'
                                        : 'Particular'
                                    }
                                </td>
                            </tr>
                        )
                    case 'Owner':
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td>
                                    <Link className="" to={{pathname: `/user/${element.value._id}`}}>
                                        {element.value.username}
                                    </Link>
                                </td>
                            </tr>
                        )
                    case 'Social level':
                    case 'Energy level':
                    case 'Trauma level':
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td className="cap">
                                    <ProgressBar variant="warning" now={element.value * 100 / 5}/>
                                </td>
                            </tr>
                        )
                    default:
                        return (
                            <tr key={element.name}>
                                <td className="subtitle_font">{element.name}</td>
                                <td className="cap">{element.value}</td>
                            </tr>
                        )
                }
            })}
            </tbody>
        </Table>
    </div>
)
CustomTable.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.bool
        ])
    }).isRequired).isRequired,
    title: PropTypes.string
}

export default CustomTable
