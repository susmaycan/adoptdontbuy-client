import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './Collapse.scss'
import {Collapse} from 'react-collapse';
class CustomCollapse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {open: false}
        this.click = this.click.bind(this)
    }

    click() {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div className="collapse-container">
                <span
                    className="open-collapse-link"
                    onClick={this.click}
                >
                    <Translate value={'search.' + this.props.name}/> <i
                    className="fas fa-sort-down"/>
                </span>
                <Collapse isOpened={this.state.open}>
                    {this.props.children}
                </Collapse>
            </div>
        )
    }
}

CustomCollapse.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}
export default CustomCollapse
