import React from 'react'
import './Message.scss'
import PropTypes from 'prop-types'
import {Cat} from "react-kawaii";

const Message = ({children}) => (
    <div className="message-container">
        <Cat size={100} mood="sad" color="#ffc107"/>
        <p className="message-text">{children}</p>
    </div>
)
Message.propTypes = {
    children: PropTypes.any.isRequired,
}

export default Message
