import React from 'react'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            subject: 'Contact from adoptdontbuy',
            text: 'Contact'
        }
    }

    componentDidMount() {
        const animalName = this.props.animalName

        if (animalName !== undefined) {
            this.setState({
                subject: 'Request adoption of ' + animalName,
                text: 'Request adoption'
            })
        }
    }

    render() {
        return (
            <a
                className="button "
                href={'mailto:' + this.props.emailDst + '?subject=' + this.state.subject}
            >
                <i className="far fa-envelope"/>
                {' '}
                {this.state.text}
            </a>
        )
    }
}

export default Contact
