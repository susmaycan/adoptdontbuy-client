import React from 'react'
import {Box, Contact, Subtitle, Table} from '../../../../../../components'
import {Translate} from 'react-redux-i18n'
import {tableElements} from '../../../../../../constants'
import PropTypes from 'prop-types'

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
            : null}

    </Box>
)
ContactInfo.propTypes = {
    user: PropTypes.object.isRequired,
    loggedUser: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}

export default ContactInfo
