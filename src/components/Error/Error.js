import React from 'react'
import './Error.scss'
import {Link} from 'react-router-dom'
import Title from "../Title";
import {Translate} from 'react-redux-i18n'
import {codeError} from '../../constants'
import {Cat} from 'react-kawaii'

class Error extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            code: '',
            text: '',
            goHome: true,
            mood: 'sad'
        }
    }

    componentDidMount() {

        switch (this.props.code) {
            case codeError.NOT_FOUND:
            default:
                this.setState({
                    code: codeError.NOT_FOUND,
                    text: 'errors.404',
                    goHome: true,
                    mood: 'sad'
                })
                break
            case codeError.SERVER_UNAVAILABLE:
                this.setState({
                    code: codeError.SERVER_UNAVAILABLE,
                    text: 'errors.500',
                    goHome: false,
                    mood: 'ko'
                })
                break

        }
    }


    render() {
        return (
            <div className="block-container error-container">
                <Title>Error <span className="code-error">{this.state.code}</span></Title>
                <p><Translate value={this.state.text} /></p>
                <Cat size={320} mood={this.state.mood} color="#ffc107" />
                {this.state.goHome ?
                    <p><strong><Link to='/'><Translate value='errors.goHome' /></Link></strong></p>
                    : ''
                }

            </div>
        )
    }
}

export default Error
