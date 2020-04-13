import React from 'react'
import './Message.scss'
import {
    Alert
} from "react-bootstrap"
import PropTypes from 'prop-types'

class Message extends React.Component {
    render() {
        return (
            <div className="container_div">
                <Alert variant="danger">{this.props.children}</Alert>
            </div>
        );
    }
}
Message.propTypes = {
    children: PropTypes.any.isRequired,
}
export default Message
