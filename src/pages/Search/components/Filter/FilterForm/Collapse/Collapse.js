import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './Collapse.scss'
import {Collapse} from 'react-collapse';

class CustomCollapse extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
    }

    state = {
        open: false
    }

    click = () => {
        this.setState({open: !this.state.open})
    }

    render() {

        const {name, children} = this.props
        const {open} = this.state

        return (
            <div className="collapse-container">
                <span
                    className="open-collapse-link"
                    onClick={this.click}
                >
                    <Translate value={'search.' + name}/> <i
                    className="fas fa-sort-down"/>
                </span>
                <Collapse isOpened={open}>
                    {children}
                </Collapse>
            </div>
        )
    }
}
export default CustomCollapse
