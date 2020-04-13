import React, {useState} from 'react'
import DeleteAnimalModal from '../DeleteAnimalModal'
import Button from '../../../../components/Common/Button'

function DeleteAnimalView(props) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteAnimal = () => {
        props.deleteAnimal(props.animal._id)
        props.redirect()
    }

    return (
        <>
            <Button
                type="delete"
                onAction={handleShow}
            />

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
