import React from 'react'
import {
    genderList,
    sizeList,
    specieList,
    regionList
} from '../../../constants'
import {
    Form
} from 'react-bootstrap'
import PropTypes from 'prop-types'

const GENDER='gender'
const SIZE='size'
const SPECIE='specie'
const REGION='region'

class Select extends React.Component {

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
        return (
            <Form.Control
                required
                value={this.props.value}
                name={this.props.name}
                as="select"
                onChange={this.props.handleChange}
            >
                <option value="-1">Select one</option>
                {this.state.list.map(element =>
                    <option key={element.value} value={element.value}>{element.name}</option>
                )}
            </Form.Control>
        )

    }
}
Select.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default Select
