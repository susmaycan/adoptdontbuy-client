import React from 'react'
import { Table, Contact, Subtitle, Box}from '../../../../../components'
import {Translate} from 'react-redux-i18n'
import './Contact.scss'
import {tableElements} from '../../../../../constants'

const ContactInfo = ({user, loggedUser, isLoggedIn}) => (
    <Box>
        <div className="tab-title-container">
            <Subtitle>
                <Translate value='userDetail.contact'/>
            </Subtitle>
        </div>
        <Table
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
        {!isLoggedIn || loggedUser._id !== user._id ?
            <Contact
                emailDst={user.email}
            />
            : ""}

    </Box>
)
export default ContactInfo
