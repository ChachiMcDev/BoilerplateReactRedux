
import React from 'react';
import { shallow } from 'enzyme';
import { LogInPage } from '../../components/LoginPage';

test('should render LoginPage', ()=>{

    const wrapper = shallow(<LogInPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();

});

test('LoginPage test file -> should call startLogin on button click for google', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LogInPage startLogin={startLogin} />)
    wrapper.find('.button--glogin').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})

