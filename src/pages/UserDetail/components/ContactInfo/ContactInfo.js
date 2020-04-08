import React from 'react'
import UserTable from '../../../../components/Common/Table'
import Contact from '../../../../components/Common/Contact'

const ContactInfo = ({user, loggedUser}) => (
    <div>
        <h2 className="subtitle petsbyuser_title">Contact</h2>
        <UserTable
            elements={[
                {
                    name: 'Email',
                    value: user.email
                }, {
                    name: 'Phone',
                    value: user.phone
                }, {
                    name: 'Website',
                    value: user.website
                },
            ]}
            title=''
        />
        {loggedUser === null || loggedUser === undefined || loggedUser._id !== user._id ?
            <Contact
                emailDst={user.email}
            />
            : ""}

    </div>
);
export default ContactInfo
