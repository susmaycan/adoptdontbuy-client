import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Button.scss'

class Button extends React.Component {

    static propTypes = {
        children: PropTypes.any.isRequired,
        submit: PropTypes.bool,
        danger: PropTypes.bool,
        disabled: PropTypes.bool,
        onAction: PropTypes.func,
        url: PropTypes.string
    }

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
            if (disabled) {
                return (
                    <button disabled className={`button ${danger && 'danger'}`}>
                        {children}
                    </button>
                )
            }

            return (
                <Link className={`button ${danger && 'danger'}`}
                      to={{
                          pathname: url
                      }}>
                    {children}
                </Link>
            )
        }

    }
}
export default Button
