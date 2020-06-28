import React, {useState} from 'react'
import DeleteUserModal from '../DeleteUserModal'
import Button from '../../../../../components/Button'
import {Translate} from 'react-redux-i18n'
import {buttonTypes} from '../../../../../constants'
import PropTypes from 'prop-types'

function DeleteUserView(props) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteUser = () => {
        props.deleteUser(props.user._id)
    }

    return (
        <React.Fragment>
            <Button
                onAction={handleShow}
                danger={true}
            >
                <i className="fas fa-trash-alt"/>&nbsp;<Translate value={buttonTypes.DELETE}/>
            </Button>

            <DeleteUserModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleSubmit={deleteUser}
                error={props.error}
                errorMsg={props.errorMsg}
                isLoading={props.isLoading}
            />
        </React.Fragment>
    )
}
DeleteUserView.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default DeleteUserView
