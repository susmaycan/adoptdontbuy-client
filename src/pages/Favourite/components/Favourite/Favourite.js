import React, {Component} from 'react'
import './Favourite.scss'

class Favourite extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFavourite: this.isIncluded()
        }
    }

    isOwner(){
        const {isLoggedIn, user, animal} = this.props
        return isLoggedIn && animal.owner === user._id
    }

    isIncluded(){
        const {isLoggedIn, user, animal} = this.props
        return isLoggedIn && user.favourites.filter(e => e._id === animal._id).length > 0
    }

    addFavourite() {

        this.setState({
            isFavourite: !this.state.isFavourite
        })
    }

    render() {
        const {isFavourite} = this.state
        const {isLoggedIn} = this.props
        return (
            <button className="button is-white" disabled={!isLoggedIn || this.isOwner()} onClick={() => this.addFavourite()}>
                <span
                      className="icon has-text-danger">
                <i className={`${isFavourite ? "fas" : "far"} fa-heart`}/>
            </span>
            </button>
        )
    }
}

export default Favourite
