import React from 'react'
import {genderList, regionList, sizeList, specieList} from '../../constants'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './ButtonGroup.scss'
import {ButtonGroup} from "react-bootstrap";

const GENDER = 'gender'
const SIZE = 'size'
const SPECIE = 'specie'
const REGION = 'region'

class CustomButtonGroup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }

        this.handleChange = this.handleChange.bind(this)
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

    handleChange(e){
        e.preventDefault()
        const value = e.target.value
        if (this.props.value === e.target.value) {
            e.target.value = ''
        }
        this.props.handleChange(e)
        e.target.value = value
    }

    render() {
        const {list} = this.state
        const {value, name} = this.props
        return (
            <ButtonGroup>
                {list.map(element => {
                        return (
                            <button
                                key={element.value}
                                value={element.value}
                                name={name}
                                className={value === element.value ? 'button-group button-selected ' : 'button-group'}
                                onClick={this.handleChange}
                            >
                                <Translate value = {name + '.' + element.value} />
                            </button>
                        )
                    }
                )}
            </ButtonGroup>
        )

    }
}

CustomButtonGroup.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default CustomButtonGroup
