import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalCard from '../AnimalCard'
import {USER_WITH_ANIMALS, ANIMAL} from '../../utils/testConst'
import {Gender, Location, PictureCard} from '../index'
import {Link} from 'react-router-dom'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        animal: ANIMAL,
        user: {},
        isLoggedIn: false,
        editMode: false,
    }

    const enzymeWrapper = shallow(<AnimalCard {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
function setupLoggedUser() {
    const props = {
        animal: ANIMAL,
        user: USER_WITH_ANIMALS,
        isLoggedIn: true,
        editMode: false,
    }

    const enzymeWrapper = shallow(<AnimalCard {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('AnimalCard component', () => {
    it('should render self', () => {
        const {enzymeWrapper} = setup()
        expect(enzymeWrapper.find('div').at(0).hasClass('animal-card-container')).toBe(true)
        expect(enzymeWrapper.find('div').at(1).hasClass('animal-info-card')).toBe(true)
        expect(enzymeWrapper.find('div').length).toBe(2)

        expect(enzymeWrapper.find('h3').hasClass('animal-name-card')).toBe(true)
        expect(enzymeWrapper.find('h3').text()).toBe(ANIMAL.name)

        const pictureCard = enzymeWrapper.find(PictureCard)
        expect(pictureCard.props().name).toBe(ANIMAL.name)
        expect(pictureCard.props().picture).toBe(ANIMAL.picture[0])

        const link = enzymeWrapper.find(Link)
        expect(link.props().to).toStrictEqual({"pathname": "/animal/" + ANIMAL._id})

        const gender = enzymeWrapper.find(Gender)
        expect(gender.props().gender).toBe(ANIMAL.gender)

        const location = enzymeWrapper.find(Location)
        expect(location.props().province).toBe(ANIMAL.province)
        expect(location.props().region).toBe(ANIMAL.region)

    })

})
