import React from 'react'
import {
    Table
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Translate} from 'react-redux-i18n'
import Subtitle from '../../Subtitle'
import TableElement from "../TableElement";
import {tableElements} from '../../../constants'

const ANIMAL_TYPE = tableElements.ANIMAL_TYPE

const CustomTable = ({elements, title, type}) => (
    <div>
        <Subtitle>
            <Translate
                value={
                    type === ANIMAL_TYPE ?
                        'animalDetail.' + title :
                        'userDetail.' + title}/>
        </Subtitle>
        <Table responsive className="custom-table">
            <tbody>
            {elements.map(element => (
                <TableElement
                    element={element}
                    type={type}
                />
            ))}
            </tbody>
        </Table>
    </div>
)


CustomTable.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.bool
        ])
    }).isRequired).isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
}

export default CustomTable
