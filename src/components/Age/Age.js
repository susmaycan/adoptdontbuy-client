import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'

class Age extends React.Component {

    render() {
        let actualYear = new Date().getFullYear().toString()
        let bornYear = parseInt(this.props.yearBorn, 10)
        const age = actualYear - bornYear

        if (age <= 1) {
            return (
                <><Translate value="age.puppy"/> ({age} <Translate value="age.years"/>)</>
            )
        }
        if (age > 1 && age < 8) {
            return (
                <><Translate value="age.adult"/> ({age} <Translate value="age.years"/>)</>
            )
        }
        if (age => 8) {
            return (
                <><Translate value="age.senior"/> ({age} <Translate value="age.years"/>)</>
            )
        }
        return (
            <>Unknown age</>
        )
    }
}

Age.propTypes = {
    yearBorn: PropTypes.string
}
export default Age
