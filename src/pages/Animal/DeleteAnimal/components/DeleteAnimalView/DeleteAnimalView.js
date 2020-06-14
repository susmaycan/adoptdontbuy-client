import React, {useState} from 'react'
import DeleteAnimalModal from '../DeleteAnimalModal'
import Button from '../../../../../components/Button'

function DeleteAnimalView(props) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const deleteAnimal = () => {
        props.deleteAnimal(props.animal._id, props.user._id)
        handleClose()
    }

    return (
        <React.Fragment>
            <Button
                onAction={handleShow}
                danger={true}
            >
                {props.children}
            </Button>

            <DeleteAnimalModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleSubmit={deleteAnimal}
                error={props.error}
                isLoading={props.isLoading}
            />
        </React.Fragment>
    )
}

export default DeleteAnimalView
