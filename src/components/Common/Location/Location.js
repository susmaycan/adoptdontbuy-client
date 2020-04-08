import React from 'react'
import { provinces, ccaa } from '../../../constants'

class Location extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            province: '',
            region: ''
        }
    }
    componentDidMount(){
        let provinceResult = 'unknown', regionResult = 'unknown'
        if (this.props.province !== "-1" && this.props.province !== "unknown" && this.props.province !== undefined && this.props.province !== 'undefined') {
            provinceResult = provinces.filter((prov) => {
                return prov.id === this.props.province
            })[0].nm
        }

        if (this.props.region !== "-1" && this.props.region !== "unknown" && this.props.region !== undefined && this.props.region !== 'undefined'){
            regionResult = ccaa.filter((region) => {
                return region.autonomia_id === this.props.region
            })[0].nombre
        }

        this.setState({
            province: provinceResult,
            region: regionResult
        })


    }
    render() {
        return (
            <span>
                <i className="fas fa-map-marker-alt" />
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
export default Location
