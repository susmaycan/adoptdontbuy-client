import React, {Component} from 'react'
import UserForm from '../../../../components/UserForm'

const CHECKBOX_TYPE = 'checkbox'
const FILE_TYPE = 'file'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = this.props.user

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(){
        this.props.submitForm(this.state)
    }

    onChange(e) {
        if (e.target.type === FILE_TYPE) {
            const file = e.target.files[0];
            this.props.uploadPhoto(file, this.state._id)
            this.setState({
                ...this.state,
                picture: 'https://firebasestorage.googleapis.com/v0/b/adoptdontbuy-react.appspot.com/o/pictures%2F' + this.state._id + '?alt=media'
            })

        } else {
            const value = e.target.type === CHECKBOX_TYPE ? e.target.checked : e.target.value
            this.setState({
                ...this.state,
                [e.target.name]: value
            })
        }
    }

    render() {
        return (
            <UserForm
                user={this.state}
                loggedUser={this.props.loggedUser}
                handleForm={this.onSubmit}
                handleChange={this.onChange}
            />
        )
    }

}

export default Form
