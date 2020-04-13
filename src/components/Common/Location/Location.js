import React from 'react'
import {
    provinceList,
    regionList
} from '../../../constants'
import PropTypes from 'prop-types'

class Location extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            province: '',
            region: ''
        }
    }

    isNotEmpty(location) {
        return location !== "-1" && location !== "unknown" && location !== undefined && location !== 'undefined'
    }

    componentDidMount() {
        let provinceResult = 'unknown', regionResult = 'unknown'

        if (this.isNotEmpty(this.props.province)) {
            provinceResult = provinceList.filter((prov) => {
                return prov.value === this.props.province
            })[0].name
        }

        if (this.isNotEmpty(this.props.region)) {
            regionResult = regionList.filter((region) => {
                return region.value === this.props.region
            })[0].name
        }

        this.setState({
            province: provinceResult,
            region: regionResult
        })


    }

    render() {
        return (
            <span>
                <i className="fas fa-map-marker-alt"/>
                <> </>
                {this.props.city !== undefined ? this.props.city + ', ' : ''}
                {this.state.province}
                <>, </>
                {this.state.region}
                {this.props.country !== undefined ? ', ' + this.props.country : ''}
            </span>
        )

    }
}

Location.propTypes = {
    city: PropTypes.string,
    province: PropTypes.string,
    region: PropTypes.string,
    country: PropTypes.string
}
export default Location
