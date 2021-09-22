const url = process.env.REACT_APP_API_URL
const animal_url = process.env.REACT_APP_API_URL_ANIMAL
const user_url = process.env.REACT_APP_API_URL_USER
const fav_url = process.env.REACT_APP_API_URL_FAVOURITE

/* - - - - - USER - - - - - */
export async function getUser(userId) {
  const response = await fetch(url + user_url + '/' + userId)
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  return body
}

export async function addUser(user) {
  const response = await fetch(url + user_url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  return body
}

export async function addFavourite(userId, animalId) {
  const urlPOST = url + user_url + '/' + userId + '/' + fav_url + '/' + animalId
  console.log('URL', urlPOST)

  const response = await fetch(
    url + user_url + '/' + userId + '/' + fav_url + '/' + animalId,
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  return body
}

export async function removeFavourite(userId, animalId) {
  const response = await fetch(
    url +
      user_url +
      '/' +
      userId +
      '/' +
      fav_url +
      '/' +
      animalId +
      '?action=delete',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  return body
}

export async function editUser(user) {
  const response = await fetch(url + user_url + '/' + user._id, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  return body
}

export async function deleteUserAPI(userId) {
  const response = await fetch(url + user_url + '/' + userId, {
    method: 'DELETE',
    mode: 'cors',
  })
  const body = await response.json()
  if (response.status !== 200) throw Error(body.message)
  return response
}

/* - - - - - ANIMALS BY USER - - - - - */
export async function animalByUser(userId) {
  const response = await fetch(url + user_url + '/' + userId + '/' + animal_url)
  const body = await response.json()
  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body
}

export const getToken = async () => {
  const finalUrl = url + 'token/'
  const data = {
    user: process.env.REACT_APP_TOKEN_USER,
    password: process.env.REACT_APP_TOKEN_PASSWORD,
  }
  const response = await fetch(finalUrl, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const body = await response.json()
  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body.token
}
