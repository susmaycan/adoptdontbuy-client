import React from 'react'
import {
    Collapse,
    Row
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './Collapse.scss'

class CustomCollapse extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
        this.clickCollapse = this.clickCollapse.bind(this)
    }

    clickCollapse(e) {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {open} = this.state
        return (
            <>
                <Row className="align-items-center">
                    <span
                        className='open-collapse-link'
                        onClick={this.clickCollapse}
                    >
                        <Translate value={'search.' + this.props.name}/> <i className="fas fa-sort-down"/>
                    </span>
                </Row>
                <Collapse in={open}>
                    {this.props.children}
                </Collapse>
            </>
        )
    }
}
CustomCollapse.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}
export default CustomCollapse
