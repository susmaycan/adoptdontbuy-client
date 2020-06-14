import React, {Component} from 'react'
import {isOwner} from '../../../../../utils/Functions'
import {status} from "../../../../../constants";
import Popover from 'react-popover'
import {Translate} from 'react-redux-i18n'

class AdoptButton extends Component {

    onClick() {
        const {isLoggedIn, user, animal} = this.props

        if (isLoggedIn && isOwner(user, animal.owner)) {
            let adoptedAnimal = {...animal, status: status.ADOPTED}
            this.props.markAsFavourite(adoptedAnimal, user._id)
        }

    }

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    togglePopover = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const {isLoggedIn, user, animal} = this.props
        const {isOpen} = this.state
        return (
            <Popover
                isOpen={isOpen}
                body={
                    <div className="popover-container">
                        <Translate value='buttons.mark-as-adopted' />
                    </div>
                }
                place="above"
                onOuterAction={this.togglePopover}
                tipSize={.01}
            >
                <button className="button is-white"
                        disabled={!isLoggedIn || !isOwner(user, animal.owner)}
                        onClick={() => this.onClick()}
                        onMouseLeave={this.togglePopover}
                        onMouseEnter={this.togglePopover}
                >
                    <span><i className="far fa-handshake"/></span>
                </button>
            </Popover>
        )
    }
}

export default AdoptButton
