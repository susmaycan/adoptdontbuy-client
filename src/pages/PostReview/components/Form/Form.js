import React from 'react'
import {Translate} from 'react-redux-i18n'
import {buttonTypes, input} from "../../../../constants";
import Button from "../../../../components/Button";
import PropTypes from 'prop-types'
import {Notification} from "../../../../components";

const Form = ({isLoading, error, errorMsg, review, updateInput, handleSubmit}) => (

    <form className="form-animal" onSubmit={handleSubmit}>
        <div className="field">
            <label className="label"><Translate value='review.rating'/></label>
            <div className="control is-expanded">
                <input
                    name="rating"
                    onChange={updateInput}
                    value={review.rating}
                    className="input"
                    type="number"
                    min={0}
                    required
                    max={5}
                    placeholder="From 0 to 5"/>
            </div>
        </div>

        <div className="field">
            <label className="label"><Translate value='review.desc'/></label>
            <div className="control is-expanded">
                        <textarea
                            name="desc"
                            onChange={updateInput}
                            value={review.desc}
                            className="textarea"
                            required
                            placeholder="Tell us more about your experience"/>
            </div>
        </div>
        {error &&
        <Notification error={true}>{errorMsg}</Notification>
        }
        {isLoading ?
            <button className="button is-loading">Loading...</button>
            :
            <Button
                submit={true}
            >
                <Translate value={buttonTypes.FINISH}/>
            </Button>
        }
    </form>
)
Form.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    review: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateInput: PropTypes.func.isRequired
}

export default Form
