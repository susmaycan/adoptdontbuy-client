import React, {Component} from 'react'
import UserForm from '../UserForm'

const CHECKBOX_TYPE = 'checkbox'
const FILE_TYPE = 'file'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            password: {
                newPassword: '',
                confirmPassword: '',
                errorDontMatch: false
            }
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.checkPasswords = this.checkPasswords.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        if(!this.state.password.errorDontMatch){
            this.props.submitForm(this.state)
        }
    }

    handlePassword(e) {
        e.preventDefault()
        this.setState({
            ...this.state,
            password: {
                ...this.state.password,
                [e.target.name]: e.target.value
            }
        }, this.checkPasswords)

    }

    checkPasswords() {
        this.setState({
            ...this.state,
            password: {
                ...this.state.password,
                errorDontMatch: this.state.password.newPassword !== this.state.password.confirmPassword
            }
        })
    }

    onChange(e) {
        if (e.target.type === FILE_TYPE) {
            const file = e.target.files[0]
            this.props.uploadPhoto(file, this.state._id)
            this.setState({
                ...this.state,
                user: {
                    ...this.state.user,
                    picture: 'https://firebasestorage.googleapis.com/v0/b/adoptdontbuy-react.appspot.com/o/pictures%2F' + this.state._id + '?alt=media'
                }
            })

        } else {
            const value = e.target.type === CHECKBOX_TYPE ? e.target.checked : e.target.value
            this.setState({
                ...this.state,
                user: {
                    ...this.state.user,
                    [e.target.name]: value
                }
            })
        }
    }

    render() {
        return (
            <UserForm
                user={this.state.user}
                password={this.state.password}
                handlePassword={this.handlePassword}
                handleForm={this.onSubmit}
                handleChange={this.onChange}
            />
        )
    }

}

export default Form
