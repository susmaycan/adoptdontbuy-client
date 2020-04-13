import React from 'react'
import PropTypes from 'prop-types'
import
{
    Link
} from 'react-router-dom'

const DELETE = 'delete'
const INFO = 'info'
const EDIT = 'edit'
const LOGOUT = 'logout'
const LOGIN = 'login'

class Button extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            icon: '',
            class: 'button',
            type: ''
        }
    }

    componentDidMount() {
        switch (this.props.type) {
            case DELETE:
                this.setState({
                    text: 'Delete',
                    icon: 'fas fa-trash-alt',
                    class: this.state.class + ' delete'
                })
                break
            case LOGOUT:
                this.setState({
                    text: 'Logout',
                    icon: 'fas fa-sign-out-alt',
                    class: this.state.class + ' delete'
                })
                break
            case LOGIN:
                this.setState({
                    text: 'Login',
                    icon: 'fas fa-sign-in-alt',
                    type: 'submit'
                })
                break
            case INFO:
            default:
                this.setState({
                    text: 'More info',
                    icon: 'fas fa-info-circle'
                })
                break
            case EDIT:
                this.setState({
                    text: 'Edit',
                    icon: 'fas fa-edit'
                })
                break
        }
    }

    render() {
        if (this.props.onAction !== undefined || this.props.url === undefined) {
            return (
                <button type={this.state.type} className={this.state.class} onClick={this.props.onAction}>
                    <i className={this.state.icon}/> {this.state.text}
                </button>
            )
        } else {
            return (
                <Link className={this.state.class}
                      to={{
                          pathname: this.props.url
                      }}>
                    <i className={this.state.icon}/> {this.state.text}
                </Link>
            )
        }
    }
}
Button.propTypes = {
    type: PropTypes.string,
    onAction: PropTypes.func,
    url: PropTypes.string
}
export default Button
