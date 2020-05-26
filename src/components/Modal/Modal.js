import React from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'
import Subtitle from '../Subtitle'
import {Translate} from 'react-redux-i18n'

class CustomModal extends React.Component {
    render() {
        return (
            <div className={this.props.show ? "modal is-active" : "modal"}>
                <div className="modal-background"/>
                <div className="modal-content custom-modal">
                    <div className="modal-title-container">
                        <Subtitle>
                            {' '}
                            <Translate value={this.props.title}/>
                        </Subtitle>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
                <button onClick={this.props.handleClose} className="modal-close is-large" aria-label="close"/>
            </div>
        )
    }
}

CustomModal.propTypes = {
    children: PropTypes.any.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}
export default CustomModal
