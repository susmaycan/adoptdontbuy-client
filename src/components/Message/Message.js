import React from 'react'
import './Message.scss'
import PropTypes from 'prop-types'
import {Cat} from "react-kawaii";

class Message extends React.Component {
    render() {
        return (
            <div className="message-container">
                <Cat size={100} mood="sad" color="#ffc107" />
                <p className="message-text">{this.props.children}</p>
            </div>
        );
    }
}
Message.propTypes = {
    children: PropTypes.any.isRequired,
}
export default Message
