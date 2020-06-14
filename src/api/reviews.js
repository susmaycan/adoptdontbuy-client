
const url = process.env.REACT_APP_API_URL
const review_url = process.env.REACT_APP_API_URL_REVIEW

export async function getAllReviews() {
    const response = await fetch(url + review_url)
    const body = await response.json()
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body
}

export async function getReview(reviewId) {
    const response = await fetch(url + review_url + '/' + reviewId)
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
}

export async function postReview(review) {
    const response = await fetch(url + review_url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
}

export async function updateReview(review) {
    const response = await fetch(url + review_url+ '/' + review._id, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
}

export async function deleteReview(reviewId) {
    return await fetch(url + review_url + '/' + reviewId, {
        method: 'DELETE',
        mode: 'cors',
    })
}
