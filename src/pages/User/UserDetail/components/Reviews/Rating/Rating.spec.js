import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Rating from '../Rating'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        value: 5
    }

    const enzymeWrapper = shallow(<Rating {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Rating component', () => {
    it('should render self', () => {
        const {enzymeWrapper} = setup()
        expect(enzymeWrapper.find('i').exists()).toBe(true)
        expect(enzymeWrapper.find('i').length).toBe(5)
        expect(enzymeWrapper.find('i').at(0).hasClass('fas fa-star rating')).toBe(true)
    })
})
