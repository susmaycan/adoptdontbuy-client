import { connect } from 'react-redux'
import {
    fetchUser
} from '../../../actions/user'

import {
    removeReview
} from '../../../actions/review'

import Reviews from '../components/Reviews'

const mapStateToProps = state => ({
    user: state.userReducer.user || {},
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
    loggedUser: state.loginReducer.user,
    isLoggedIn: state.loginReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch(fetchUser(id)),
    deleteReview: (reviewId) => dispatch(removeReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
