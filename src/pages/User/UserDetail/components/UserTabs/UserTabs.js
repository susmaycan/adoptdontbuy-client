import React from 'react'
import {Translate} from 'react-redux-i18n'
import './UserTabs.scss'
import {Box} from '../../../../../components'

const tabList = [
    {
        'name': 'user',
        'tabName': 'account',
        'link': '',
        'requiredLogin': false,
    },
    {
        'name': 'contact',
        'tabName': 'contact',
        'link': '/contact',
        'requiredLogin': false
    },
    {
        'name': 'pets',
        'tabName': 'pets',
        'link': '/pets',
        'requiredLogin': false
    },
    {
        'name': 'fav',
        'tabName': 'favourites',
        'link': '/fav',
        'requiredLogin': true
    },
    {
        'name': 'adopted',
        'tabName': 'adopted',
        'link': '/adopted',
        'requiredLogin': true
    },
    {
        'name': 'reserved',
        'tabName': 'reserved',
        'link': '/reserved',
        'requiredLogin': true
    },
    {
        'name': 'reviews',
        'tabName': 'reviews',
        'link': '/reviews',
        'requiredLogin': false
    }
]

class UserTabs extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            activeTab: this.getActiveTab()
        }
    }

    componentDidUpdate(prevProps) {

        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                activeTab: this.getActiveTab()
            })
        }

    }

    getActiveTab() {
        const splitURL = this.props.location.pathname.split(this.props.match.params.userId)
        return splitURL.length === 2 && splitURL[1] !== "" ? splitURL[1] : tabList[0].name
    }

    changeActiveTab(e, name, link) {
        e.preventDefault()
        this.setState({
            activeTab: name
        }, this.props.history.push('/user/' + this.props.match.params.userId + link))
    }

    render() {
        const {isLoggedIn} = this.props
        return (
            <Box>
                <div className="tabs is-centered">
                    <ul>
                        {tabList.map(tab => {
                            if (!tab.requiredLogin || (tab.requiredLogin && isLoggedIn)) {
                                return (
                                    <li key={tab.name}
                                        className={this.state.activeTab === tab.name || this.state.activeTab === tab.link ? "is-active" : ''}>
                                        <a href="/#" onClick={(e) => this.changeActiveTab(e, tab.name, tab.link)}>
                                            <Translate value={"userDetail.tabs." + tab.tabName}/>
                                        </a>
                                    </li>
                                )
                            }
                            return null
                        })}
                    </ul>
                </div>
            </Box>
        )
    }
}

export default UserTabs
