import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';


test('expect dashboard page to render', ()=>{
    const wrapper = shallow(<DashboardPage /> );
    expect(wrapper).toMatchSnapshot();
});