import React, {Component} from 'react'
import {isOwner} from '../../../../../utils/Functions'
import PropTypes from 'prop-types'

class Favourite extends Component {

    static propTypes = {
        animal: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        success: PropTypes.bool.isRequired,
        addFavourite: PropTypes.func.isRequired,
        deleteFavourite: PropTypes.func.isRequired,
    }

    isIncluded() {
        const {isLoggedIn, user, animal} = this.props
        return isLoggedIn && user.favourites.filter(e => e._id === animal._id).length > 0
    }

    clickFavourite() {
        const {isLoggedIn, user, animal} = this.props

        if (isLoggedIn) {
            const userId = user._id
            const animalId = animal._id
            this.isIncluded() ? this.props.deleteFavourite(userId, animalId) : this.props.addFavourite(userId, animalId)
        }
    }

    render() {
        const {isLoggedIn, user, animal} = this.props
        return (
            <button className="button is-white" disabled={!isLoggedIn || isOwner(user, animal.owner)}
                    onClick={() => this.clickFavourite()}>
                <span
                    className="icon has-text-danger">
                <i className={`${this.isIncluded() ? "fas" : "far"} fa-heart`}/>
            </span>
            </button>
        )
    }
}

export default Favourite
