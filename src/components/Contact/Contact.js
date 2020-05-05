import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            subject: 'Contact of adoptdontbuy',
            text: 'contact.contact'
        }
    }

    componentDidMount() {
        const animalName = this.props.animalName

        if (animalName !== undefined) {
            this.setState({
                subject: 'Adoption of ' + animalName,
                text: 'contact.request'
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
                &nbsp;
                <Translate value={this.state.text}/>
            </a>
        )
    }
}

Contact.propTypes = {
    emailDst: PropTypes.string.isRequired,
    animalName: PropTypes.string
}

export default Contact
