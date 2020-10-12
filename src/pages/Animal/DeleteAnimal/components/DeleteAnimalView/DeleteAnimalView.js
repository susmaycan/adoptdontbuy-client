import React, {useState} from 'react'
import DeleteAnimalModal from '../DeleteAnimalModal'
import Button from '../../../../../components/Button'
import PropTypes from 'prop-types'

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
                handleSubmit={deleteAnimal}
            />
        </React.Fragment>
    )
}

DeleteAnimalView.propTypes = {
    animal: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    deleteAnimal: PropTypes.func.isRequired,
}
export default DeleteAnimalView
