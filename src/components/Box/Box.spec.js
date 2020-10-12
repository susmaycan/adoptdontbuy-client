import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Box from '../Box'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        children: <p>Hello</p>,
        center: false,
    }

    const enzymeWrapper = shallow(<Box {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

function setupCentered() {
    const props = {
        children: <p>Hello</p>,
        center: true,
    }

    const enzymeWrapper = shallow(<Box {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Box component', () => {
    it('should render self not centered', () => {
        const {enzymeWrapper} = setup()
        expect(enzymeWrapper.find('div').exists()).toBe(true)
        expect(enzymeWrapper.find('div').hasClass('block-container')).toBe(true)
        expect(enzymeWrapper.find('div').hasClass('centered')).toBe(false)
        expect(enzymeWrapper.find('p').exists()).toBe(true)
        expect(enzymeWrapper.find('p').text()).toBe('Hello')

    })

    it('should render self centered', () => {
        const {enzymeWrapper} = setupCentered()
        expect(enzymeWrapper.find('div').exists()).toBe(true)
        expect(enzymeWrapper.find('div').hasClass('block-container')).toBe(true)
        expect(enzymeWrapper.find('div').hasClass('centered')).toBe(true)
        expect(enzymeWrapper.find('p').exists()).toBe(true)
        expect(enzymeWrapper.find('p').text()).toBe('Hello')

    })
})
