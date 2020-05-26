import React, {useState} from 'react'
import DeleteUserModal from '../DeleteUserModal'
import Button from '../../../../../components/Button'
import {Translate} from "react-redux-i18n";
import {buttonTypes} from "../../../../../constants";

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
    );
}

export default DeleteUserView
