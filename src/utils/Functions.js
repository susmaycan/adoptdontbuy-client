export function sortByUpdateDate(list) {
    list.sort(function (a, b) {
        a = new Date(a.updatedAt)
        b = new Date(b.updatedAt)
        return a > b ? -1 : a < b ? 1 : 0
    })

    return list
}

export function isOwner(user, owner) {
    return user !== undefined && user !== null && owner !== undefined && owner !== null && (user._id === owner._id || user._id === owner)
}

export function isAuthenticated(user, loggedUser) {
    return loggedUser != null && loggedUser._id === user._id

}
