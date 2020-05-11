import React, {Component} from 'react'
import './Favourite.scss'

class Favourite extends Component {

    constructor(props) {
        super(props)
    }


    isOwner() {
        const {isLoggedIn, user, animal} = this.props
        return isLoggedIn && animal.owner === user._id
    }

    isIncluded() {
        const {isLoggedIn, user, animal} = this.props
        if(isLoggedIn){
            console.log("Is ", animal._id , " included in ", user.favourites , '?', isLoggedIn && user.favourites.filter(e => e._id === animal._id).length > 0)
        }
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
        const {isLoggedIn} = this.props

        return (
            <button className="button is-white" disabled={!isLoggedIn || this.isOwner()}
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
