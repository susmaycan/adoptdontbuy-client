import React from 'react'
import Gender from '../../Gender'
import Location from '../../Location'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './TableElement.scss'
import {tableElements} from '../../../constants'
import Date from '../../Date'
import Status from "../../Status";

const ANIMAL_TYPE = tableElements.ANIMAL_TYPE

class TableElement extends React.Component {

    static propTypes = {
        element: PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.object,
                PropTypes.bool
            ])
        }).isRequired,
        type: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        const elementName = this.props.element.name
        const elementValue = this.props.element.value

        switch (elementName) {
            case tableElements.GENDER:
                this.setState({
                    value: <Gender
                        gender={elementValue}
                    />
                })
                break
            case tableElements.STATUS:
                this.setState({
                    value: <Status
                        status={elementValue}
                    />
                })
                break
            case tableElements.CREATED_AT:
                this.setState({
                    value: <Date value={elementValue}/>
                })
                break
            case tableElements.AGE:
                this.setState({
                    value:
                        <Translate value={'age.' + elementValue}/>
                })
                break
            case tableElements.SIZE:
                this.setState({
                    value:
                        <Translate value={'size.' + elementValue}/>
                })
                break
            case tableElements.SPECIE:
                this.setState({
                    value:
                        <Translate value={'specie.' + elementValue}/>
                })
                break
            case tableElements.LOCATION:
                this.setState({
                    value:
                        <Location
                            province={elementValue.province}
                            region={elementValue.region}
                            city={elementValue.city}
                            country={elementValue.country}
                        />
                })
                break
            case tableElements.TYPE_OF_USER:
                this.setState({
                    value: elementValue === true ?
                        <Translate value={'typeOfUser.animalShelter'}/>
                        : <Translate value={'typeOfUser.particular'}/>
                })
                break
            case tableElements.OWNER:
                this.setState({
                    value:
                        <Link className="" to={{pathname: `/user/${elementValue._id}`}}>
                            {elementValue.username}
                        </Link>
                })
                break
            case tableElements.SOCIAL_LEVEL:
            case tableElements.ENERGY_LEVEL:
            case tableElements.TRAUMA_LEVEL:
                const value = elementValue * 100 / 5
                this.setState({
                    value: <progress className="progress is-warning" value={value} max="100">{value} %</progress>
                })
                break
            default:
                this.setState({
                    value: elementValue
                })
                break
        }
    }

    render() {
        const {element, type} = this.props
        return (
            <tr key={element.name}>
                <td className="table-col-bold">
                    <Translate
                        value={type === ANIMAL_TYPE ? 'animal.' + element.name : 'user.' + element.name}/>
                </td>
                <td className="table-col">
                    {this.state.value}
                </td>
            </tr>
        )
    }
}

export default TableElement
