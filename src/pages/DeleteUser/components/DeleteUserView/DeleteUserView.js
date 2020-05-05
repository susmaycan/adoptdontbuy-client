import React, {useState} from 'react'
import DeleteUserModal from '../DeleteUserModal'
import Button from '../../../../components/Button'
import {Redirect} from "react-router";
import {Translate} from "react-redux-i18n";
import {buttonTypes} from "../../../../constants";

function DeleteUserView(props) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [redirect, setRedirect] = useState(false)

    const deleteUser = () => {
        props.deleteUser(props.user._id)
        props.logout()
        setRedirect(true)
    }

    return (
        <>
            {redirect ? <Redirect to={'/'} /> : null}
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
        </>
    );
}

export default DeleteUserView
