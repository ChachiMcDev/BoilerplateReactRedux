import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../../components/HelpPage';


test('expect help page to be rendered', ()=>{
    const wrapper = shallow(<HelpPage /> );
    expect(wrapper).toMatchSnapshot();
});