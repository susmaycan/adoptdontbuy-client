import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({error, close, children}) => (
    <div className={error ? "notification is-danger" : "notification is-primary"}>
        <button className="delete" onClick={close}/>
        {children}
    </div>
)

Notification.propTypes = {
    children: PropTypes.any.isRequired,
    close: PropTypes.func,
    error: PropTypes.func
}
export default Notification
