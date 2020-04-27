import React from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'
import Subtitle from '../Subtitle'
import {Translate} from 'react-redux-i18n'
import {
    Modal
} from 'react-bootstrap'

class CustomModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} className="custom-modal" animation={true}>
                <div className="modal-title-container">
                    <Subtitle>
                        {' '}
                        <Translate value={this.props.title}/>
                        <button type="button" className="close" onClick={this.props.handleClose}>&times;</button>
                    </Subtitle>
                </div>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
            </Modal>
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
