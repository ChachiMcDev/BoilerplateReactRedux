import React from 'react';
import { shallow } from 'enzyme';
import ExpenseHelpPage from '../../components/ExpenseHelpPage';


test('expect help page to be rendered', ()=>{
    const wrapper = shallow(<ExpenseHelpPage /> );
    expect(wrapper).toMatchSnapshot();
});