import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


test('expect expensedashboard page to render expense list and expense filters', ()=>{
    const wrapper = shallow(<ExpenseDashboardPage /> );
    expect(wrapper).toMatchSnapshot();
});