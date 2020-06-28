import React, {Component} from 'react'
import UserForm from '../UserForm'
import PropTypes from 'prop-types'
import {input} from '../../../../../../constants'

class Form extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        loggedUser: PropTypes.object.isRequired,
        submitForm: PropTypes.func.isRequired,
        uploadPhoto: PropTypes.func.isRequired,
        error: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired,
        isLoading: PropTypes.bool.isRequired,
    }

    state = {
        user: this.props.user,
        password: {
            newPassword: '',
            confirmPassword: '',
            errorDontMatch: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.password.errorDontMatch) {
            this.props.submitForm(this.state)
        }
    }

    handlePassword = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            password: {
                ...this.state.password,
                [e.target.name]: e.target.value
            }
        }, this.checkPasswords)

    }

    checkPasswords = () => {
        this.setState({
            ...this.state,
            password: {
                ...this.state.password,
                errorDontMatch: this.state.password.newPassword !== this.state.password.confirmPassword
            }
        })
    }

    onChange = (e) => {
        if (e.target.type === input.FILE) {
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
            const value = e.target.type === input.CHECKBOX ? e.target.checked : e.target.value
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
        const {user, password } = this.state
        const {isLoading } = this.props
        return (
            <UserForm
                user={user}
                password={password}
                handlePassword={this.handlePassword}
                handleForm={this.onSubmit}
                handleChange={this.onChange}
                isLoading={isLoading}
            />
        )
    }

}

export default Form
