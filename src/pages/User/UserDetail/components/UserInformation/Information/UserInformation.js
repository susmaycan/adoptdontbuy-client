import React from 'react'
import {Box, Button, Subtitle, Table} from '../../../../../../components'
import DeleteUser from '../../../../DeleteUser'
import {Translate} from 'react-redux-i18n'
import './UserInformation.scss'
import {buttonTypes, tableElements} from '../../../../../../constants'
import {isAuthenticated} from '../../../../../../utils/Functions'
import UserProfilePicture from "../../UserProfilePicture";
import PropTypes from 'prop-types'

const UserInformation = ({user, loggedUser}) => (
    <Box>
        <div className="has-text-centered">
            <h1 className="title">@{user.username}</h1>
        </div>
        <div className="columns">
            <div className="column is-offset-9">
                {isAuthenticated(loggedUser, user) &&
                    <div className="centered">
                        <Button
                            url={`/updateUser/${loggedUser._id}`}
                        >
                            <i className="fas fa-edit"/> <Translate value={buttonTypes.EDIT}/>
                        </Button>
                        <DeleteUser/>
                    </div>
                }
            </div>
        </div>
        <div className="columns is-vcentered">
            <div className="column is-7">
                <div className="user-information">
                    <Table
                        elements={[
                            {
                                name: tableElements.FULL_NAME,
                                value: user.first_name + ' ' + user.last_name
                            },
                            {
                                name: tableElements.TYPE_OF_USER,
                                value: user.animal_shelter
                            },
                            {
                                name: tableElements.ADDRESS_LINE,
                                value: user.address_line
                            },
                            {
                                name: tableElements.LOCATION,
                                value: {
                                    province: user.province,
                                    region: user.region,
                                    city: user.city,
                                    country: user.country
                                }
                            },
                        ]}
                        title='userInformation'
                        type={tableElements.TYPE_USER}
                    />
                </div>
            </div>
            <div className="column is-5 centered">
                <UserProfilePicture username={user.username} picture={user.picture}/>
            </div>
        </div>
        {user.description !== "unknown" &&
        <div className="user-about">
            <Subtitle><Translate value='userDetail.about'/></Subtitle>
            <p>{user.description}</p>
        </div>
        }
    </Box>
)
UserInformation.propTypes = {
    user: PropTypes.object.isRequired,
    loggedUser: PropTypes.object.isRequired
}

export default UserInformation
