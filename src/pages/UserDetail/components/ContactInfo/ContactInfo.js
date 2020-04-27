import React from 'react'
import UserTable from '../../../../components/Table'
import Contact from '../../../../components/Contact'
import {Translate} from 'react-redux-i18n'
import Subtitle from '../../../../components/Subtitle'
import './ContactInfo.scss'
import {tableElements} from '../../../../constants'

const ContactInfo = ({user, loggedUser}) => (
    <div>
        <div className="tab-title-container">
            <Subtitle>
                <Translate value='userDetail.contact'/>
            </Subtitle>
        </div>
        <UserTable
            elements={[
                {
                    name: tableElements.EMAIL,
                    value: user.email
                }, {
                    name: tableElements.PHONE,
                    value: user.phone
                }, {
                    name: tableElements.WEBSITE,
                    value: user.website
                },
            ]}
            title=''
            type={tableElements.TYPE_USER}
        />
        {loggedUser === null || loggedUser === undefined || loggedUser._id !== user._id ?
            <Contact
                emailDst={user.email}
            />
            : ""}

    </div>
);
export default ContactInfo
