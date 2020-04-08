import React from 'react'
import {
    Spinner
} from 'react-bootstrap'
import './Loading.css'

class Loading extends React.Component {

    render() {
        return (
            <div className="container-spinner">
                <Spinner variant="warning" animation="grow" />
            </div>
        )
    }
}

export default Loading
