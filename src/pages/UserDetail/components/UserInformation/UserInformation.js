import React from 'react'
import {
    Row,
    Col,
    Image
} from 'react-bootstrap'
import UserTable from '../../../../components/Common/Table'
import Button from '../../../../components/Common/Button'
import DeleteUser from "../../../DeleteUser/containers/DeleteUser";

const UserInformation = ({user, loggedUser}) => (
    <div>
        <h1 className="centered title">@{user.username}</h1>
        <Row>
            <Col xs={9}>
                <div className="info">
                    <UserTable
                        elements={[
                            {
                                name: 'Full name',
                                value: user.first_name + ' ' + user.last_name
                            },
                            {
                                name: 'Type',
                                value: user.animal_shetter
                            },
                            {
                                name: 'Address',
                                value: user.address_line
                            },
                            {
                                name: 'Location', value: {
                                    province: user.province,
                                    region: user.region,
                                    city: user.city,
                                    country: user.country
                                }
                            },
                        ]}
                        title='User information'
                    />
                </div>
            </Col>
            <Col xs={3}>
                <Image rounded className="profile_image" fluid src={user.picture}/>
            </Col>
        </Row>
        {user.description !== "unknown" ?
            <div className="about">
                <h2 className="subtitle">About</h2>
                <hr/>

                <p>{user.description}</p>
            </div>
            : ""
        }

        {loggedUser != null && loggedUser._id === user._id ?
            <div className="centered">
                <Button
                    type="edit"
                    url={'/updateUser/'+loggedUser._id}
                    />
                <DeleteUser />
            </div>
            : ""}

    </div>
)
export default UserInformation
