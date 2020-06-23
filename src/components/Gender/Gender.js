import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'

class Gender extends React.Component {

    static propTypes = {
        gender: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            name: 'Unknown',
            icon: ''
        }
    }

    componentDidMount() {
        switch (this.props.gender) {
            case "M":
                this.setState({
                    name: 'gender.M',
                    icon: 'fas fa-mars'
                })
                break
            case "F":
                this.setState({
                    name: 'gender.F',
                    icon: 'fas fa-venus'
                })
                break
            default:
                this.setState({
                    name: 'gender.unknown',
                    icon: ''
                })
                break
        }
    }

    render() {
        return (
            <p><Translate value={this.state.name}/> <i className={this.state.icon}/></p>
        )
    }
}

export default Gender
