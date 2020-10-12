import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import {isAdopted} from "../../utils/Functions";

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            subject: 'Contact of adoptdontbuy',
            text: 'contact.contact'
        }
    }

    static propTypes = {
        emailDst: PropTypes.string.isRequired,
        animalName: PropTypes.string
    }

    componentDidMount() {
        const animalName = this.props.animal !== undefined ? this.props.animal.name : undefined

        if (animalName !== undefined) {
            this.setState({
                subject: 'Adoption of ' + animalName,
                text: 'contact.request'
            })
        }
    }

    render() {
        const {animal, emailDst, subject} = this.props
        const {text} = this.state
        if (isAdopted(animal)) {
            return (
                <button
                    className="button"
                    disabled
                >
                    <i className="far fa-envelope"/>
                    &nbsp;
                    <Translate value={text}/>
                </button>
            )
        }
        return (
            <a
                className="button "
                href={'mailto:' + emailDst + '?subject=' + subject}
            >
                <i className="far fa-envelope"/>
                &nbsp;
                <Translate value={text}/>
            </a>
        )
    }
}
export default Contact
