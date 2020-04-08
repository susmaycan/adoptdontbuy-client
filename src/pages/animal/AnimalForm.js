import React, { useState, useEffect } from 'react';
import {
    Form,
    Col,
} from 'react-bootstrap';
import { ccaa, provinces } from "../../constants";

function AnimalForm(e) {
    const animalParam = e.animal;
    const handleSubmit = e.handleSubmit;
    const action = e.action;

    const [animal, setAnimal] = useState(animalParam);

    const [location, setLocation] = useState({
        ccaa: ccaa,
        provinces: provinces
    });

    useEffect(() => {
        const startProvinces = () => {
            var filtered_prov = provinces;
            if (animalParam.region !== "-1" && animalParam.province !== "-1") {
                filtered_prov = provinces.filter((prov) => {
                    return prov.autonomia_id.includes(animalParam.region);
                });
            }

            setLocation({
                ccaa: ccaa,
                provinces: filtered_prov
            });
        }
        setAnimal(animalParam);
        startProvinces();
    }, [animalParam]);


    const updateProvinces = (e) => {
        const filtered_prov = provinces.filter((prov) => {
            return prov.autonomia_id.includes(e.target.value);
        });
        setLocation({
            ccaa: ccaa,
            provinces: filtered_prov
        });
    }

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(animal);
    }

    const updateInput = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setAnimal({
            ...animal,
            [e.target.name]: value
        });
    }

    var actualYear = new Date().getFullYear();
    var maxYear = actualYear + 1;
    var minYear = actualYear - 100;
    return (
        <Form className="formAnimal" onSubmit={submit}>
            <Form.Group as={Col} onChange={updateInput} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control required value={animal.name} name="name" placeholder="Toby" />
            </Form.Group>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridSpecie" >
                    <Form.Label>Specie</Form.Label>
                    <Form.Control required value={animal.specie} name="specie" as="select">
                        <option value="-1">Choose...</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group onChange={updateInput} as={Col} controlId="formGridBreed">
                    <Form.Label>Breed</Form.Label>
                    <Form.Control required value={animal.breed} name="breed" placeholder="Bodeguero" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridGenre">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control required value={animal.gender} name="gender" as="select">
                        <option value="-1">Choose...</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group onChange={updateInput} as={Col} controlId="formGridSize">
                    <Form.Label>Size</Form.Label>
                    <Form.Control required value={animal.size} name="size" as="select">
                        <option value="-1">Choose...</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="big">Big</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridYearBorn">
                    <Form.Label>Year Born</Form.Label>
                    <Form.Control min={minYear} max={maxYear} type="number" required value={animal.yearBorn} name="yearBorn" placeholder="2019, 2018..." />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridRegion">
                    <Form.Label>Region</Form.Label>
                    <Form.Control required onChange={updateProvinces} value={animal.region} name="region" as="select">
                        <option value="-1">Select one</option>
                        {location.ccaa.map(region =>
                            <option key={region.autonomia_id} value={region.autonomia_id}>{region.nombre}</option>
                        )};
</Form.Control>
                </Form.Group>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridProvince">
                    <Form.Label>Province</Form.Label>
                    <Form.Control required value={animal.province} name="province" as="select">
                        <option value="-1">Select one</option>
                        {location.provinces.map(prov =>
                            <option key={prov.id} value={prov.id}>{prov.nm}</option>
                        )};
</Form.Control>
                </Form.Group>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control required value={animal.city} name="city">

                        {/* {location.cities.map(city =>
        <option key={city.municipio_id} value={city.municipio_id}>{city.nombre}</option>
    )}; */}
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            {/* OPTIONAL FIELDS*/}
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridAbout">
                    <Form.Label>About</Form.Label>
                    <Form.Control placeholder="Describe your animal here..." as="textarea" name="about" rows="3" defaultValue={animal.about}>
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
                        checked={animal.vaccinated} />
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
            </Form.Row >
            <Form.Row>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridsocialLevel">
                    <Form.Label>Social Level</Form.Label>
                    <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="socialLevel" value={animal.socialLevel}>
                    </Form.Control>
                </Form.Group>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridTraumaLevel">
                    <Form.Label>Trauma Level</Form.Label>
                    <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="traumaLevel" value={animal.traumaLevel}>
                    </Form.Control>
                </Form.Group>
                <Form.Group onChange={updateInput} as={Col} controlId="formGridEnergyLevel">
                    <Form.Label>Energy Level</Form.Label>
                    <Form.Control min="0" max="5" placeholder="From to 0 to 5" type="number" name="energyLevel" value={animal.energyLevel}>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            {action === "add" ?
                <button className="button" variant="primary" type="submit">Next step</button>
                :
                <button className="button" variant="primary" type="submit">Finish</button>
            }
        </Form>
    );
}
export default AnimalForm;
