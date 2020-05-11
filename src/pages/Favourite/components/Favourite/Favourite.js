import React, {Component} from 'react'
import './Favourite.scss'
import {isOwner} from "../../../../utils/Functions";

class Favourite extends Component {

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
