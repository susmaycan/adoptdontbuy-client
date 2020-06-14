import {connect} from 'react-redux'
import {addReview} from '../../../actions/review'
import PostReview from '../components/PostReviewView'

const mapStateToProps = state => ({
    error: state.reviewReducer.post.error,
    errorMsg: state.reviewReducer.post.errorMsg,
    success: state.reviewReducer.post.success,
    isLoading: state.reviewReducer.isLoading,
    user: state.userReducer.user,
    loggedUser: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    postReview: (review, userId) => dispatch(addReview(review, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostReview)
