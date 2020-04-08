import React, {useState} from 'react'
import DeleteUserModal from '../DeleteUserModal'
import Button from '../../../../components/Common/Button'
import {Redirect} from "react-router";

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
                type="delete"
                onAction={handleShow}
            />

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
