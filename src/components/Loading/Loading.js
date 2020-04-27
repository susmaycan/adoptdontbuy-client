import React from 'react'
import {
    Spinner
} from 'react-bootstrap'
import './Loading.css'

const Loading = () => (
    <div className="container-spinner">
        <Spinner variant="warning" animation="grow"/>
    </div>
)

export default Loading
