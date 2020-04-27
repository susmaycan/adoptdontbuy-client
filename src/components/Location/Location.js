import React from 'react'
import PropTypes from 'prop-types'
import LocationElement from "./LocationElement";

class Location extends React.Component {
    render() {
        return (
            <span>
                <i className="fas fa-map-marker-alt"/>
                <> </>
                {this.props.city !== undefined ? this.props.city + ', ' : ''}
                <LocationElement
                    value={this.props.province}
                    name='province'
                />
                <>, </>
               <LocationElement
                   value={this.props.region}
                   name='region'
               />
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
