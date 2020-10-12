import React from 'react'
import './UserProfilePicture.scss'
import {Image} from "react-bootstrap";
import PropTypes from 'prop-types'

const UserProfilePicture = ({username, picture}) => (
    <div> {
        picture === "unknown" || picture === undefined ?
            <Image rounded className="profile_image" fluid
                   src={'https://api.adorable.io/avatars/250/' + username}/>
            :
            <Image rounded className="profile_image" fluid src={picture}/>
    }
    </div>

)
UserProfilePicture.propTypes = {
    username: PropTypes.string,
    picture: PropTypes.string,
}

export default UserProfilePicture
