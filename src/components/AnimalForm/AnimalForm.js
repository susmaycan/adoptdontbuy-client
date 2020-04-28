import React from 'react'
import {
    Form,
    Col,
} from 'react-bootstrap'
import {
    Button,
    ProvinceSelect,
    Select
} from '../../components'
import PropTypes from 'prop-types'
import {Translate, I18n} from 'react-redux-i18n'
import {buttonTypes} from "../../constants";

const MIN_YEAR = 2000
const MAX_YEAR = 3000 //TODO change this

const AnimalForm = ({animal, updateInput, submit, action}) => (
    <Form className="form-animal" onSubmit={submit}>
        <Form.Group as={Col} onChange={updateInput} controlId="formGridName">
            <Form.Label><Translate value='animal.name'/></Form.Label>
            <Form.Control required value={animal.name} name="name" placeholder="Toby"/>
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} onChange={updateInput} controlId="formGridSpecie">
                <Form.Label><Translate value='animal.specie'/></Form.Label>
                <Select
                    value={animal.specie}
                    name='specie'
                    handleChange={updateInput}
                />
            </Form.Group>

            <Form.Group onChange={updateInput} as={Col} controlId="formGridBreed">
                <Form.Label><Translate value='animal.breed'/></Form.Label>
                <Form.Control required value={animal.breed} name="breed" placeholder="Bodeguero"/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridGenre">
                <Form.Label><Translate value='animal.gender'/></Form.Label>
                <Select
                    value={animal.gender}
                    name='gender'
                    handleChange={updateInput}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSize">
                <Form.Label><Translate value='animal.size'/></Form.Label>
                <Select
                    value={animal.size}
                    name='size'
                    handleChange={updateInput}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridYearBorn">
                <Form.Label><Translate value='animal.age'/></Form.Label>
                <Select
                    value={animal.age}
                    name='age'
                    handleChange={updateInput}
                />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridRegion">
                <Form.Label><Translate value='animal.region'/></Form.Label>
                <Select
                    value={animal.region}
                    name='region'
                    handleChange={updateInput}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridProvince">
                <Form.Label><Translate value='animal.province'/></Form.Label>
                <ProvinceSelect
                    province={animal.province}
                    region={animal.region}
                    handleChange={updateInput}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridCity">
                <Form.Label><Translate value='animal.city'/></Form.Label>
                <Form.Control required value={animal.city} name="city">
                </Form.Control>
            </Form.Group>
        </Form.Row>
        {/* OPTIONAL FIELDS*/}
        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAbout">
                <Form.Label><Translate value='animal.about'/></Form.Label>
                <Form.Control placeholder="Describe your animal here..." as="textarea" name="about" rows="3"
                              defaultValue={animal.about}>
                </Form.Control>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridCastrated">
                <Form.Check
                    type="checkbox"
                    label={I18n.t('animal.castrated')}
                    name="castrated"
                    checked={animal.castrated}
                />
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridVaccinated">
                <Form.Check
                    name="vaccinated"
                    label={I18n.t('animal.vaccinated')}
                    type="checkbox"
                    checked={animal.vaccinated}/>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithDogs">
                <Form.Check
                    label={I18n.t('animal.alongWithDogs')}
                    name="alongWithDogs"
                    type="checkbox"
                    checked={animal.alongWithDogs}
                >
                </Form.Check>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithCats">
                <Form.Check
                    label={I18n.t('animal.alongWithCats')}
                    name="alongWithCats"
                    type="checkbox"
                    checked={animal.alongWithCats}
                >
                </Form.Check>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridAlongWithKids">
                <Form.Check
                    label={I18n.t('animal.alongWithKids')}
                    name="alongWithKids"
                    type="checkbox"
                    checked={animal.alongWithKids}
                >
                </Form.Check>
            </Form.Group>
        </Form.Row>
        {action === "add" ?
            <Form.Row>
                <Form.Group as={Col} controlId="formGridPicture">
                    <Form.Label><Translate value='animal.picture'/></Form.Label>
                    <input
                        type='file'
                        id="picture"
                        name="picture"
                        required
                        onChange={updateInput}
                        multiple="multiple"
                    />
                </Form.Group>
            </Form.Row>
            :
            null
        }
        <Form.Row>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridsocialLevel">
                <Form.Label><Translate value='animal.socialLevel'/></Form.Label>
                <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="socialLevel"
                              value={animal.socialLevel}>
                </Form.Control>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridTraumaLevel">
                <Form.Label><Translate value='animal.traumaLevel'/></Form.Label>
                <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="traumaLevel"
                              value={animal.traumaLevel}>
                </Form.Control>
            </Form.Group>
            <Form.Group onChange={updateInput} as={Col} controlId="formGridEnergyLevel">
                <Form.Label><Translate value='animal.energyLevel'/></Form.Label>
                <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="energyLevel"
                              value={animal.energyLevel}>
                </Form.Control>
            </Form.Group>
        </Form.Row>
        <Button
           submit={true}
        >
            <Translate value={buttonTypes.FINISH}/>
        </Button>
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
                animal_shelter: PropTypes.bool,
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
