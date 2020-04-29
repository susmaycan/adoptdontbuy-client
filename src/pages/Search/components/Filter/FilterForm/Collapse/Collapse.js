import React from 'react'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import './Collapse.scss'
import bulmaCollapsible from '@creativebulma/bulma-collapsible'

class Collapse extends React.Component {

    componentDidMount() {
        this.collapsibles = bulmaCollapsible.attach(".is-collapsible", {
            container: this.refs.collapsibles
        })
    }

    render() {
        return (
            <div ref="collapsibles" id={'accordion_first_'+this.props.name}>
                <div className='open-collapse-link'>
                    <a href={'#collapsible-accordion-'+this.props.name} data-action="collapse">
                        <Translate value={'search.' + this.props.name}/> <i className="fas fa-sort-down"/>
                    </a>
                </div>
                <div
                    id={'collapsible-accordion-'+this.props.name}
                    className="is-collapsible is-active"
                    data-parent={'accordion_first_'+this.props.name}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Collapse.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}
export default Collapse
