export const USER_WITH_ANIMALS = {
    picture: "pictureURL",
    animals: [
        {
            picture: [
                "pictureURL1",
                "pictureURL2",
            ],
            _id: "111111111",
            name: "Test cat",
            specie: "cat",
            breed: "Persa",
            gender: "F",
            size: "big",
            yearBorn: "2011",
            country: "Spain",
            region: "01",
            province: "04",
            city: "Almería",
            about: "This is a test about",
            castrated: false,
            vaccinated: true,
            alongWithDogs: false,
            alongWithCats: false,
            alongWithKids: false,
            socialLevel: 2,
            traumaLevel: 3,
            energyLevel: 1,
            owner: "123456789",
            status: "01",
            createdAt: "2020-01-13T08:15:49.318Z",
            updatedAt: "2020-06-05T13:30:57.320Z",
            __v: 0,
            age: "adult"
        },
    ],
    favourites: [
        {
            picture: [
                "pictureURL3"
            ],
            _id: "2222222",
            name: "Test dog",
            specie: "dog",
            breed: "Galgo",
            gender: "F",
            size: "big",
            yearBorn: "2018",
            country: "Spain",
            region: "11",
            province: "10",
            city: "Cáceres",
            about: "This is a test about dog.",
            castrated: false,
            vaccinated: true,
            alongWithDogs: true,
            alongWithCats: true,
            alongWithKids: true,
            socialLevel: 5,
            traumaLevel: 5,
            energyLevel: 5,
            owner: "987654321",
            status: "00",
            createdAt: "2020-01-22T12:33:39.197Z",
            updatedAt: "2020-04-20T17:26:07.315Z",
            __v: 0,
            age: "adult"
        }
    ],
    reviews: [
        {
            _id: "00000000009",
            desc: "This is a review test",
            rating: 5,
            from: {
                picture: "pictureURL4",
                _id: "987654321",
                username: "Test2"
            },
            to: "123456789",
            createdAt: "2020-06-07T11:29:25.668Z",
            updatedAt: "2020-06-07T11:29:25.668Z",
            __v: 0
        }
    ],
    _id: "123456789",
    phone: "+34 666666666",
    website: "http://wwww.asdyrocks.es",
    address_line: "Test st, 1",
    country: "Spain",
    region: "11",
    province: "10",
    city: "Cáceres",
    description: "Hello! This is a test.",
    first_name: "Test",
    last_name: "Test lastname",
    email: "test@gmail.com",
    username: "test",
    createdAt: "2020-01-09T08:02:07.396Z",
    updatedAt: "2020-06-27T20:10:47.111Z",
    __v: 169,
    animal_shelter: false
}

export const USER = {
    picture: "pictureURL",
    animals: [
        "111111111"
    ],
    favourites: [
      "2222222"
    ],
    reviews: [
       "00000000009"
    ],
    _id: "123456789",
    phone: "+34 666666666",
    website: "http://wwww.asdyrocks.es",
    address_line: "Test st, 1",
    country: "Spain",
    region: "11",
    province: "10",
    city: "Cáceres",
    description: "Hello! This is a test.",
    first_name: "Test",
    last_name: "Test lastname",
    email: "test@gmail.com",
    username: "test",
    createdAt: "2020-01-09T08:02:07.396Z",
    updatedAt: "2020-06-27T20:10:47.111Z",
    __v: 169,
    animal_shelter: false
}

export const ERROR_MESSAGE = "Error"
export const SUCCESS_MESSAGE = "Success"

export const REVIEW = {
    _id: "00000000009",
    desc: "This is a review test",
    rating: 5,
    from: "987654321",
    to: "123456789"
}
