import React from 'react'

class Age extends React.Component {

    render() {
        let actualYear = new Date().getFullYear().toString()
        let bornYear = parseInt(this.props.yearBorn, 10)
        const age = actualYear - bornYear

        if (age <= 1) {
            return (
                <>Puppy ({age} years)</>
            )
        } else if (age > 1 && age < 8) {
            return (
                <>Adult ({age} years)</>
            );
        } else if (age => 8) {
            return (
                <>Senior ({age} years)</>
            )
        } else {
            return (
                <>Unknown age</>
            )
        }
    }
}
export default Age