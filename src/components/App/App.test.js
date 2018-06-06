import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import App from './App';

describe('App', () => {

    let wrapper;

    it('Input field Email is missing', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#emailId').length).toEqual(1);
    });

    it('Input field phone is missing', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#phoneId').length).toEqual(1);
    });

    it('Input field Date of Birth is missing', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('#dobId').length).toEqual(1);
    });

});