import React from 'react'
import PropTypes from 'prop-types'
import LocationElement from "./LocationElement";

class Location extends React.Component {

    static propTypes = {
        city: PropTypes.string,
        province: PropTypes.string,
        region: PropTypes.string,
        country: PropTypes.string
    }

    render() {
        const {city, province, region, country} = this.props
        return (
            <span>
                <i className="fas fa-map-marker-alt"/>
                <> </>
                {city !== undefined ? city + ', ' : ''}
                <LocationElement
                    value={province}
                    name='province'
                />
                <>, </>
               <LocationElement
                   value={region}
                   name='region'
               />
                {country !== undefined ? ', ' + country : ''}
            </span>
        )

    }
}

export default Location
