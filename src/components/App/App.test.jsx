import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {

    let wrapper;

    it('Contains Input type email', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#emailId').length).toEqual(1);
    });

    it('Contains Input field phone', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#phoneId').length).toEqual(1);
    });

    it('Contains Input field Date of Birth', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#dobId').length).toEqual(1);
    });

    it('Contains Form submit button', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#submitId').length).toEqual(1);
    });

    it('Contains simulated email value', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep@mail.com"}});
        expect(wrapper.state().emailVal).toEqual('deep@mail.com');
    });

    it('Contains simulated phone number value', () => {
        wrapper = shallow(<App />);
        wrapper.find('#phoneId').simulate('change', {target: {value: "9876543210"}});
        expect(wrapper.state().phoneVal).toEqual('9876543210');
    });

    it('Contains simulated Date Of birth value', () => {
        wrapper = shallow(<App />);
        wrapper.find('#phoneId').simulate('change', {target: {value: "2018-06-06"}});
        expect(wrapper.state().phoneVal).toEqual('2018-06-06');
    });

});