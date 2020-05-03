import React from 'react'
import {provinceList} from '../../constants'
import PropTypes from 'prop-types'
import {I18n} from 'react-redux-i18n'

class ProvinceSelect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            provinceList: []
        }
    }

    updateProvinces(region) {
        const filterProvinceList = provinceList.filter((prov) => {
            return prov.region.includes(region)
        })

        this.setState({
            provinceList: filterProvinceList
        })
    }

    componentDidMount() {
        this.updateProvinces(this.props.region)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.region !== this.props.region) {
            this.updateProvinces(this.props.region)
        }
    }

    render() {
        return (
            <div className="select is-fullwidth">
                <select
                    name="province"
                    value={this.props.province}
                    onChange={this.props.handleChange}
                    className={'form-control' + (this.props.errors && this.props.touched ? ' is-invalid' : '')}
                    disabled={this.state.provinceList.length === 0}
                >
                    <option value="-1">{I18n.t('input.selectOne')}</option>
                    {this.state.provinceList.map(prov =>
                        <option key={prov.value} value={prov.value}>{prov.name}</option>
                    )}
                </select>
            </div>
        )

    }
}

ProvinceSelect.propTypes = {
    region: PropTypes.string,
    province: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.any,
    touched: PropTypes.any
}
export default ProvinceSelect
