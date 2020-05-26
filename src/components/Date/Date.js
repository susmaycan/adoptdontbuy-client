import React from 'react'
import PropTypes from 'prop-types'
import {I18n} from 'react-redux-i18n'

class CustomDate extends React.Component {

    render() {
        const {value} = this.props
        let date = new Date(value)
        const formattedDate = date.getDate() + ' ' + I18n.t('months.'+(date.getMonth()+1)) + ' ' + date.getFullYear()

        return(
            <span>{formattedDate}</span>
        )
    }
}
CustomDate.propTypes = {
    value: PropTypes.string.isRequired
}
export default CustomDate
