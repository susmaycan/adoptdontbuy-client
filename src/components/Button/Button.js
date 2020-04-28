import React from 'react'
import PropTypes from 'prop-types'
import
{
    Link
} from 'react-router-dom'

class Button extends React.Component {
    render() {
        const {submit, onAction, url, children, danger, disabled} = this.props

        if (url === undefined) {
            return (
                <button
                    type={submit ? 'submit' : ''}
                    className={danger ? 'button danger' : 'button'}
                    disabled={disabled}
                    onClick={onAction !== undefined ? onAction : null}>
                    {children}
                </button>
            )
        } else {
            return (
                <Link className={danger ? 'button danger' : 'button'}
                      to={{
                          pathname: url
                      }}>
                    {children}
                </Link>
            )
        }

    }
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    submit: PropTypes.bool,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    onAction: PropTypes.func,
    url: PropTypes.string
}
export default Button