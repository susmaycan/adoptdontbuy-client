import React from 'react'
import {
    genderList,
    sizeList,
    specieList,
    regionList,
    ageList
} from '../../constants'
import PropTypes from 'prop-types'
import {I18n} from 'react-redux-i18n'

const GENDER = 'gender'
const SIZE = 'size'
const SPECIE = 'specie'
const REGION = 'region'
const AGE = 'age'

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
            <div className="select">
                <select
                    required
                    value={value}
                    name={name}
                    onChange={handleChange}
                >
                    <option value="-1">{I18n.t('input.selectOne')}</option>
                    {this.state.list.map(element => {
                            const text = name === 'region' ?
                                element.name
                                : I18n.t(name + '.' + element.value)
                            return (
                                <option key={element.value} value={element.value}>{text}</option>
                            )

                        }
                    )}
                </select>
            </div>
        )

    }
}

Select.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default Select
