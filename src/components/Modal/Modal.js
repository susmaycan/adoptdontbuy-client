import React from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'
import Subtitle from '../Subtitle'
import {Translate} from 'react-redux-i18n'

const CustomModal = ({show, title, children, handleClose}) => (
    <div className={show ? "modal is-active" : "modal"}>
        <div className="modal-background"/>
        <div className="modal-content custom-modal">
            <div className="modal-title-container">
                <Subtitle>
                    {' '}
                    <Translate value={title}/>
                </Subtitle>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
        <button onClick={handleClose} className="modal-close is-large" aria-label="close"/>
    </div>
)
CustomModal.propTypes = {
    children: PropTypes.any.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default CustomModal
