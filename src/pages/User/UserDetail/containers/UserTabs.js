import {connect} from 'react-redux'

import UserTabs from '../components/UserTabs'

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
})

export default connect(mapStateToProps, null)(UserTabs)
