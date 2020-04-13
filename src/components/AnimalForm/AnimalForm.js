import React from 'react'
import {
    Form,
    Col,
} from 'react-bootstrap'
import ProvinceSelect from '../Common/ProvinceSelect'
import PropTypes from 'prop-types'
import Select from '../Common/Select'

const MIN_YEAR = 2000
const MAX_YEAR = 3000 //TODO change this

const AnimalForm = ({animal, updateInput, submit, action}) => (
    <Form className="formAnimal" onSubmit={submit}>
        <Form.Group as={Col} onChange={updateInput} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control required value={animal.name} name="name" placeholder="Toby"/>
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} onChange={updateInput} controlId="formGridSpecie">
                <Form.Label>Specie</Form.Label>
                <Select
                    value={animal.specie}
                    name='specie'
                    handleChange={updateInput}
                />
            </Form.Group>

            <Form.Group onChange={updateInput} as={Col} controlId="formGridBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control required value={animal.breed} name="breed" placeholder="Bodeguero"/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
                <Form.Label>Gender</Form.Label>
                <Select
                    value={animal.gender}
                    name='gender'
                    handleChange={updateInput}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSize">
                <Form.Label>Size</Form.Label>
                <Select
                    value={animal.size}
                    name='size'
                    handleChange={updateInput}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridYearBorn">
                <Form.Label>Year Born</Form.Label>
                <Form.Control min={MIN_YEAR} max={MAX_YEAR} type="number" required value={animal.yearBorn}
                              name="yearBorn" placeholder="2019, 2018..."/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridRegion">
                <Form.Label>Region</Form.Label>
                <Select
                    value={animal.region}
                    name='region'
                    handleChange={updateInput}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridProvince">
                <Form.Label>Province</Form.Label>
                <ProvinceSelect
                    province={animal.province}
                    region={animal.region}
                    handleChange={updateInput}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control required value={animal.city} name="city">
                </Form.Control>
            </Form.Group>
        </Form.Row>
        {/* OPTIONAL FIELDS*/}
        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAbout">
                <Form.Label>About</Form.Label>
                <Form.Control placeholder="Describe your animal here..." as="textarea" name="about" rows="3"
                              defaultValue={animal.about}>
                </Form.Control>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridCastrated">
                <Form.Check
                    type="checkbox"
                    label="Castrated"
                    name="castrated"
                    checked={animal.castrated}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridVaccinated">
                <Form.Check
                    name="vaccinated"
                    label="Vaccinated"
                    type="checkbox"
                    checked={animal.vaccinated}/>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithDogs">
                <Form.Check
                    label="Along with dogs"
                    name="alongWithDogs"
                    type="checkbox"
                    checked={animal.alongWithDogs}
                >
                </Form.Check>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithCats">
                <Form.Check
                    label="Along with cats"
                    name="alongWithCats"
                    type="checkbox"
                    checked={animal.alongWithCats}
                >
                </Form.Check>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithKids">
                <Form.Check
                    label="Along with kids"
                    name="alongWithKids"
                    type="checkbox"
                    checked={animal.alongWithKids}
                >
                </Form.Check>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridPicture">
                <Form.Label>Picture</Form.Label>
                <input type='file'
                       id="picture"
                       name="picture"
                       onChange={updateInput}
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridsocialLevel">
                <Form.Label>Social Level</Form.Label>
                <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="socialLevel"
                              value={animal.socialLevel}>
                </Form.Control>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridTraumaLevel">
                <Form.Label>Trauma Level</Form.Label>
                <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="traumaLevel"
                              value={animal.traumaLevel}>
                </Form.Control>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridEnergyLevel">
                <Form.Label>Energy Level</Form.Label>
                <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="energyLevel"
                              value={animal.energyLevel}>
                </Form.Control>
            </Form.Group>
        </Form.Row>
        {action === "add" ?
            <button className="button" type="submit">Upload</button>
            :
            <button className="button" type="submit">Finish</button>
        }
    </Form>
)
AnimalForm.propTypes = {
    animal: PropTypes.shape({
        name: PropTypes.string,
        specie: PropTypes.string,
        breed: PropTypes.string,
        gender: PropTypes.string,
        size: PropTypes.string,
        yearBorn: PropTypes.string,
        country: PropTypes.string,
        region: PropTypes.string,
        province: PropTypes.string,
        city: PropTypes.string,
        about: PropTypes.string,
        castrated: PropTypes.bool,
        vaccinated: PropTypes.bool,
        alongWithDogs: PropTypes.bool,
        alongWithCats: PropTypes.bool,
        alongWithKids: PropTypes.bool,
        socialLevel: PropTypes.number,
        traumaLevel: PropTypes.number,
        energyLevel: PropTypes.number,
        picture: PropTypes.arrayOf(PropTypes.string),
        status: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        __v: PropTypes.any,
        owner: PropTypes.oneOfType([
            PropTypes.shape({
                picture: PropTypes.string,
                _id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                inAdoption: PropTypes.arrayOf(PropTypes.string),
                adoptedByOthers: PropTypes.arrayOf(PropTypes.string),
                reserved: PropTypes.arrayOf(PropTypes.string),
                favourites: PropTypes.arrayOf(PropTypes.string),
                adoptedByMe: PropTypes.arrayOf(PropTypes.string),
                reviews: PropTypes.arrayOf(PropTypes.string),
                likedAnimals: PropTypes.arrayOf(PropTypes.string),
                adopted: PropTypes.arrayOf(PropTypes.string),
                phone: PropTypes.string,
                animal_shetter: PropTypes.bool,
                website: PropTypes.string,
                address_line: PropTypes.string,
                country: PropTypes.string,
                region: PropTypes.string,
                province: PropTypes.string,
                city: PropTypes.string,
                description: PropTypes.string,
                first_name: PropTypes.string,
                last_name: PropTypes.string,
                email: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                createdAt: PropTypes.string,
                updatedAt: PropTypes.string,
                __v: PropTypes.any,
            }),
            PropTypes.string
        ])
    }).isRequired
}
export default AnimalForm
