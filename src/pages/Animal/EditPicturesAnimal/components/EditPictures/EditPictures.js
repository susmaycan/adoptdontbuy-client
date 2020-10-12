import React from 'react'
import PropTypes from 'prop-types'
import {Button, PictureCard} from '../../../../../components'
import {Translate} from "react-redux-i18n";
import {buttonTypes} from "../../../../../constants";

const EditPictures = ({animal, uploadPictures, deletePicture}) => (
    <div>
        <div className="columns is-centered">
            <div className="column is-narrow">
                <div className="field is-centered">
                    <div className="file is-boxed">
                        <label className="file-label">
                            <input
                                className="file-input"
                                type="file"
                                name="picture"
                                required
                                multiple="multiple"
                                onChange={uploadPictures}
                            />
                            <span className="file-cta">
                          <span className="file-icon">
                            <i className="fas fa-upload"/>
                          </span>
                          <span className="file-label">
                            Choose a file…
                          </span>
                        </span>
                        </label>
                    </div>
                    <p className="help">You can add multiple pictures.</p>
                </div>
            </div>
        </div>
        <div className="columns is-multiline is-mobile is-centered">
            {animal.picture.map((pic) => (
                <div key={pic} className="column is-narrow">
                    <PictureCard name={animal.name} picture={pic}/>
                    <button onClick={() => deletePicture(pic)} className="button danger"><i
                        className="fas fa-trash-alt"/>
                    </button>
                </div>
            ))}
        </div>
        <div className="has-text-centered">
            <Button
                url={`/animal/${animal._id}`}
            >
                <Translate value={buttonTypes.FINISH}/>
            </Button>
        </div>
    </div>
)
EditPictures.propTypes = {
    animal: PropTypes.object.isRequired,
    uploadPictures: PropTypes.func.isRequired,
    deletePicture: PropTypes.func.isRequired
}
export default EditPictures
