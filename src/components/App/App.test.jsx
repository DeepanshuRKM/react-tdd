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

    it('Contains submit as button for id submitId', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#submitId').props().type).toEqual('button');
    });

    it('Contains simulated email value', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep@mail.com"}});
        expect(wrapper.state().emailVal).toEqual('deep@mail.com');
    });

    it('contains email error span if wrong format of email found', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep"}});
        expect(wrapper.find('#emailErrorId').length).toEqual(1);
    });

    it('contains email error span if wrong format of email found', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep@"}});
        expect(wrapper.find('#emailErrorId').length).toEqual(1);
    });

    it('contains email error span if wrong format of email found', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep@mail."}});
        expect(wrapper.find('#emailErrorId').length).toEqual(1);
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

    it('contains validation check for future date', () => {
        wrapper = shallow(<App />);
        wrapper.find('#dobId').simulate('change', {target: {value: "2099-08-08"}});
        expect(wrapper.find('#dobErrorId').length).toEqual(1);
    });

    it('called handleSubmit on click of submit button', () => {
        wrapper = shallow(<App />);
        wrapper.find('#submitId').prop('onClick')();
        expect(wrapper.state().emailErrorMessage).toEqual(true);
    });

    it('fill email value and called handleSubmit on click of submit button and shows error span for phone number', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep@mail.com"}});
        wrapper.find('#submitId').prop('onClick')();
        expect(wrapper.state().phoneErrorMessage).toEqual(true);
    });

    it('fill email and phone number value and called handleSubmit on click of submit button and shows error span for DOB', () => {
        wrapper = shallow(<App />);
        wrapper.find('#emailId').simulate('change', {target: {value: "deep@mail.com"}});
        wrapper.find('#phoneId').simulate('change', {target: {value: "9876543210"}});
        wrapper.find('#submitId').prop('onClick')();
        expect(wrapper.state().dobErrorMessage).toEqual(true);
    });

});