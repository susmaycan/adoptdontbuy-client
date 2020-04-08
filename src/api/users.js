
const url = process.env.REACT_APP_API_URL;
const animal_url = process.env.REACT_APP_API_URL_ANIMAL;
const user_url = process.env.REACT_APP_API_URL_USER;

/* - - - - - USER - - - - - */
export async function getUser(userId) {
    const response = await fetch(url + user_url + '/' + userId);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}

export async function addUser(user) {
    const response = await fetch(url + user_url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}

export async function editUser(user) {
    const response = await fetch(url + user_url + '/' + user._id, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
}

export async function deleteUserAPI(userId) {
    const response = await fetch(url + user_url + '/' + userId, {
        method: 'DELETE',
        mode: 'cors',
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return response
}


/* - - - - - ANIMALS BY USER - - - - - */
export async function animalByUser(userId) {
    const response = await fetch(url + user_url + '/' + userId + '/' + animal_url);
    const body = await response.json();
    if (response.status !== 200) {
        console.log("Error ", body.message);
        throw Error(body.message);
    }
    return body;
}



