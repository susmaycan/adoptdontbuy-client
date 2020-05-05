import React from 'react'
import {Translate} from 'react-redux-i18n'
import './UserTabs.scss'
import {Box} from "../../../../components";

const tabList = [
    {
        'name': 'user',
        'tabName': 'account',
        'link': '',
    },
    {
        'name': 'pets',
        'tabName': 'pets',
        'link': '/pets',
    },
    {
        'name': 'contact',
        'tabName': 'contact',
        'link': '/contact',
    },
    {
        'name': 'reviews',
        'tabName': 'reviews',
        'link': '/reviews',
    },
    {
        'name': 'fav',
        'tabName': 'favourites',
        'link': '/fav',
    },
]

class UserTabs extends React.Component {

    constructor(props) {
        super(props)

        const splitURL = this.props.location.pathname.split(this.props.match.params.userId)
        const active = splitURL.length === 2 && splitURL[1] !== "" ? splitURL[1] : tabList[0].name
        this.state = {
            activeTab: active
        }
    }

    changeActiveTab(e, name, link) {
        e.preventDefault()
        this.setState({
            activeTab: name
        }, this.props.history.push('/user/' + this.props.match.params.userId + link))
    }

    render() {
        return (
            <Box>
                <div className="tabs is-centered">
                    <ul>
                        {tabList.map(tab =>
                            <li key={tab.name}
                                className={this.state.activeTab === tab.name || this.state.activeTab === tab.link ? "is-active" : ''}>
                                <a onClick={(e) => this.changeActiveTab(e, tab.name, tab.link)}>
                                    <Translate value={"userDetail.tabs." + tab.tabName}/>
                                </a>
                            </li>)
                        }
                    </ul>
                </div>
            </Box>
        )
    }
}

export default UserTabs
