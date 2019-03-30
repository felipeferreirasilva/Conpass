import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { Hotspots } from '../Hotspots/Hotspots'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Popover from '../Popover/Popover'

describe('<Hotspots />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Hotspots hotspots={[{ x: 10, y: 10, title: 'teste', message: 'teste' }]} />)
    })

    it('renders 1 Container', () => {
        expect(wrapper.find(Container).length).toBe(1);
    })

    it('renders 2 Buttons', () => {
        expect(wrapper.find(Button).length).toBe(2);
    })

    it('renders 1 Table', () => {
        expect(wrapper.find(Table).length).toBe(1);
    })

    it('renders 1 Popover', () => {
        expect(wrapper.find(Popover).length).toBe(1);
    })

    it('renders 2 td', () => {
        expect(wrapper.find('td').length).toBe(2);
    })

})