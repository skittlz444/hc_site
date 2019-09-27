import React from 'react';
import {shallow, mount} from 'enzyme';
import Contact from '../Contact';
import ContactForm from '../ContactForm';
import ContactDisclaimer from '../ContactDisclaimer';
import {Form} from 'react-bootstrap'

describe('<Contact />', () => {

	it('shallow renders without crashing', ()=>{
		shallow(<Contact />);
	});

	it('shallow renders the child components', ()=>{
		const wrapper = shallow(<Contact />);
		expect(wrapper.exists(ContactDisclaimer)).toBeTruthy();
		expect(wrapper.exists(ContactForm)).toBeTruthy();
	});

	it('fully renders without crashing', ()=>{
		mount(<Contact />);
	});
})