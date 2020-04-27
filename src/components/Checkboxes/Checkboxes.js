import React from 'react'
import {
    genderList,
    sizeList,
    specieList,
    regionList,
    ageList
} from '../../constants'
import {
    Form
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {I18n} from 'react-redux-i18n'

const GENDER = 'gender'
const SIZE = 'size'
const SPECIE = 'specie'
const REGION = 'region'
const AGE = 'age'

class Checkboxes extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        switch (this.props.name) {

            case GENDER:
                this.setState({
                    list: genderList
                })
                break

            case AGE:
                this.setState({
                    list: ageList
                })
                break
            case SIZE:
                this.setState({
                    list: sizeList
                })
                break
            case REGION:
            default:
                this.setState({
                    list: regionList
                })
                break
            case SPECIE:
                this.setState({
                    list: specieList
                })
                break
        }
    }

    render() {
        const {value, name, handleChange} = this.props
        return (
            <div>{
                this.state.list.map(element => {
                        const text = name === 'region' ?
                            element.name
                            : I18n.t(name + '.' + element.value)
                        return (
                            <Form.Check
                                inline
                                key={element.value}
                                label={text}
                                name={name}
                                value={element.value}
                                checked={value !== undefined && value.includes(element.value)}
                                type="checkbox"
                                onChange={handleChange}
                            />
                        )})}
            </div>
        )
    }
}

Checkboxes.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default Checkboxes
