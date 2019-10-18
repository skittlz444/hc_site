import React from 'react';
import {shallow, mount} from 'enzyme';
import {Form} from 'react-bootstrap';

import Contact from '../Contact';
import ContactDisclaimer from '../ContactDisclaimer';
import ContactForm from '../ContactForm';

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
});