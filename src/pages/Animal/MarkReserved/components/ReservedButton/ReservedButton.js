import React, {Component} from 'react'
import {isReserved, isOwner} from '../../../../../utils/Functions'
import {status} from "../../../../../constants";
import Popover from 'react-popover'
import {Translate} from 'react-redux-i18n'

class ReservedButton extends Component {

    onClick() {
        const {isLoggedIn, user, animal} = this.props

        if (isLoggedIn && isOwner(user, animal.owner)) {
            let adoptedAnimal
            if (isReserved(animal)) {
                adoptedAnimal = {...animal, status: status.IN_ADOPTION}

            } else {
                adoptedAnimal = {...animal, status: status.RESERVED}
            }
            this.props.markAsReserved(adoptedAnimal, user._id)
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
                        {isReserved(animal) ?
                            <Translate value='buttons.unmark-as-reserved' />
                            :
                            <Translate value='buttons.mark-as-reserved' />
                        }
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
                    <span><i className="fas fa-bookmark"/></span>
                </button>
            </Popover>
        )
    }
}

export default ReservedButton
