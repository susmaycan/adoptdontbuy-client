import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
    render() {
        return (
        <div className="notification is-primary">
            <button className="delete" onClick={this.props.close}/>
            {this.props.children}
        </div>
    )}
}

Message.propTypes = {
    children: PropTypes.any.isRequired,
    close: PropTypes.func
}
export default Message
