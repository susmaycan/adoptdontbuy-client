import React, {Component} from 'react';
import PropTypes from 'prop-types'
import NavigationBar from "../NavigationBar";

class NavigationBarContainer extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired
    }

    state = {
        isActive: false
    }

    setIsActive = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        const {isActive} = this.state
        return (
            <NavigationBar {...this.props} isActive={isActive} setIsActive={this.setIsActive}/>
        )
    }
}

export default NavigationBarContainer
