
const url = process.env.REACT_APP_API_URL
const animal_url = process.env.REACT_APP_API_URL_ANIMAL
const search_url = process.env.REACT_APP_API_URL_SEARCH

/* - - - - - ANIMAL - - - - - */
export async function getAnimals() {
    const response = await fetch(url + animal_url)
    const body = await response.json()
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body
}

export async function getAnimal(animalId) {
    const response = await fetch(url + animal_url + '/' + animalId)
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
}

export async function addAnimalAPI(animal) {
    const response = await fetch(url + animal_url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(animal),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
}

export async function updateAnimal(animal) {
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
export async function removeAnimal(animalId) {
    const response = await fetch(url + animal_url + '/' + animalId, {
        method: 'DELETE',
        mode: 'cors',
    });
    return response;
}

/* - - - - - FILTER - - - - - */
export async function filterAnimal(query) {
    const response = await fetch(url + search_url + '?' + query);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};
