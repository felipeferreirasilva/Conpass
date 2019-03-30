import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Popover from '../Popover/Popover'

// Importa compoenents do Bootstrap
import PopoverBs from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

describe('<Popover />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Popover />)
    })

    it('renders OverlayTrigger', () => {
        expect(wrapper.find(OverlayTrigger).length).toBe(1);
    })

})