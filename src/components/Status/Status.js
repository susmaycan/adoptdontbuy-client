import React from 'react'
import PropTypes from 'prop-types'
import {status} from "../../constants";
import {Translate} from 'react-redux-i18n'

class Status extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'In adoption',
            variant: 'success'
        }
    }

    componentDidMount() {
        switch (this.props.status) {
            case status.IN_ADOPTION:
                this.setState({
                    status: 'status.' + status.IN_ADOPTION,
                    variant: 'is-success'
                })
                break
            case status.ADOPTED:
                this.setState({
                    status: 'status.' + status.ADOPTED,
                    variant: 'is-danger'
                })
                break
            case status.RESERVED:
                this.setState({
                    status: 'status.' + status.RESERVED,
                    variant: 'is-warning'
                })
                break
            default:
                this.setState({
                    status: 'status.' + status.UNKNOWN,
                    variant: 'is-secondary'
                })
                break
        }
    }

    render() {
        return (
            <span className={"tag badge-custom " + this.state.variant}><Translate value={this.state.status}/></span>
        )
    }
}

Status.propTypes = {
    status: PropTypes.string
}
export default Status
