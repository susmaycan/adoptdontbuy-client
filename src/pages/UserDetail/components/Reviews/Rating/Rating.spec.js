import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Rating from './Rating'

Enzyme.configure({adapter: new Adapter()})

describe('Rating component', () => {
    it('should render self', () => {
        const enzymeWrapper = shallow(<Rating />)

        expect(enzymeWrapper.find('div.container-rating').exists()).toBe(true)
        expect(enzymeWrapper.find('i').exists()).toBe(true)
        expect(enzymeWrapper.find('i').at(0).hasClass('fas fa-star')).toBe(true)
    })
})
