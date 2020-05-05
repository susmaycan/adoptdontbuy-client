import React, {useState} from 'react'
import DeleteAnimalModal from '../DeleteAnimalModal'
import Button from '../../../../components/Button'
import {Translate} from "react-redux-i18n";
import {buttonTypes} from "../../../../constants";

function DeleteAnimalView(props) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteAnimal = () => {
        props.deleteAnimal(props.animal._id)
    }

    return (
        <>
            <Button
                onAction={handleShow}
                danger={true}
            >
                <i className="fas fa-trash-alt"/>&nbsp;<Translate value={buttonTypes.DELETE}/>
            </Button>

            <DeleteAnimalModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleSubmit={deleteAnimal}
                error={props.error}
                isLoading={props.isLoading}
            />
        </>
    );
}

export default DeleteAnimalView
