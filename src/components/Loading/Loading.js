import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './Loading.css'
import Loader from 'react-loader-spinner'

const Loading = () => (
    <div className="container-spinner">
        <Loader
            type="Oval"
            color="#ffc107"
            height={100}
            width={100}
        />
    </div>
)

export default Loading
