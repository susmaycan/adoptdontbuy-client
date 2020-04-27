import React from 'react'
import {
    provinceList,
    regionList
} from '../../../constants'
import PropTypes from 'prop-types'

const PROVINCE = 'province'
class LocationElement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            element: ''
        }
    }

    isNotEmpty(location) {
        return location !== "-1" && location !== "unknown" && location !== undefined && location !== 'undefined'
    }

    componentDidMount() {
        let result = 'unknown'
        const list = this.props.name === PROVINCE ? provinceList : regionList


        if (this.isNotEmpty(this.props.value)) {
            result = list.filter((el) => {
                return el.value === this.props.value
            })[0].name
        }

        this.setState({
            element: result
        })


    }

    render() {
        return (
            <span>
                {this.state.element}
            </span>
        )

    }
}

LocationElement.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string
}
export default LocationElement
