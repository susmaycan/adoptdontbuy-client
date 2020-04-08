
const url = process.env.REACT_APP_API_URL;
const animal_url = process.env.REACT_APP_API_URL_ANIMAL;
const user_url = process.env.REACT_APP_API_URL_USER;
const search_url = process.env.REACT_APP_API_URL_SEARCH;

/* - - - - - ANIMAL - - - - - */
export async function getAnimals() {
    const response = await fetch(url + animal_url);
    const body = await response.json();
    if (response.status !== 200) {
        console.log("Error ", body.message);
        throw Error(body.message);
    }
    console.log("Response" + body);
    return body;
};


export async function getLatestAnimals() {
    const response = await fetch(url + animal_url);
    const body = await response.json();
    if (response.status !== 200) {
        console.log("Error ", body.message);
        throw Error(body.message);
    }
    console.log("Response" + body);
    return body;
};


export async function getAnimal(animalId) {
    const response = await fetch(url + animal_url + '/' + animalId);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export async function addAnimalAPI(animal) {
    const response = await fetch(url + animal_url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(animal),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export async function uploadAnimal(animal) {
    const response = await fetch(url + animal_url + '/' + animal._id, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(animal),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};
export async function deleteAnimalAPI(animalId) {
    const response = await fetch(url + animal_url + '/' + animalId, {
        method: 'DELETE',
        mode: 'cors',
    });
    console.log("Response", response);
    return response;
};



/* - - - - - FILTER - - - - - */
export async function filterAPI(query) {
    console.log("Call API ", query);
    const response = await fetch(url + search_url + '?' + query);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};



/* - - - - - USER - - - - - */
export async function getUser(userId) {
    const response = await fetch(url + user_url + '/' + userId);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};
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
};
export async function uploadUser(user) {
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
};
export async function deleteUserAPI(userId) {
    const response = await fetch(url + user_url + '/' + userId, {
        method: 'DELETE',
        mode: 'cors',
    });
    console.log("Response", response);
    return response;
}


/* - - - - - ANIMALS BY USER - - - - - */
export async function animalByUser(userId) {
    const response = await fetch(url + user_url + '/' + userId + '/' + animal_url + '?type=inAdoption');
    const body = await response.json();
    if (response.status !== 200) {
        console.log("Error ", body.message);
        throw Error(body.message);
    }
    console.log("Response" + body);
    return body;
}



