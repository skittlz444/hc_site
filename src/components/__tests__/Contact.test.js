import React from 'react';
import {shallow, mount} from 'enzyme';
import Contact from '../Contact';
import {Form} from 'react-bootstrap'

describe('<Contact />', () => {

	it('shallow renders without crashing', ()=>{
		shallow(<Contact />);
	});

	it('renders form container in shallow render', ()=>{
		const wrapper = shallow(<Contact />);
		expect(wrapper.exists(Form)).toBeTruthy();
	})

	it('renders heading text on shallow render', () => {
		const wrapper = shallow(<Contact />);
		expect(wrapper.contains('Contact Me')).toBeTruthy();
	});

	it('fully renders without crashing', ()=>{
		mount(<Contact />);
	});

	it('renders all form components including button on full render', ()=>{
		const wrapper = mount(<Contact />);
		expect(wrapper.find('input').length).toBe(3);
		expect(wrapper.find('textarea').length).toBe(1);
		expect(wrapper.find('button').length).toBe(1);
	});

	it('shows warning dialogue if text fields aren\'t filled in when submit is clicked', ()=>{
		const wrapper = mount(<Contact />);
		wrapper.find('button').simulate('click');
		expect(wrapper.contains("Please fill in all fields to submit a contact request.")).toBeTruthy();
	});

	it('shows bad email message if email is not formatted correctly', ()=>{
		const wrapper = mount(<Contact />);
		wrapper.find('#contactEmail').simulate('change', {target: {value: 'invalidEmail'}});
		wrapper.find('button').simulate('click');
		expect(wrapper.contains("Please fill in all fields to submit a contact request.")).toBeTruthy();
		expect(wrapper.contains("The email address doesn't look right, please enter a valid email address.")).toBeTruthy();		
	});

	it('replaces button with loading cirlce on filled out form submission', () => {
		const wrapper = mount(<Contact />);
		wrapper.find('#contactName').simulate('change', {target:{value: 'test'}});
		wrapper.find('#contactEmail').simulate('change', {target:{value: 'test@test.com'}});
		wrapper.find('#contactSubject').simulate('change', {target:{value: 'test'}});
		wrapper.find('#contactBody').simulate('change', {target:{value: 'test'}});
		wrapper.find('button').simulate('click');
		expect(wrapper.find('button').length).toBe(0);
		expect(wrapper.find('.spinner-border').length).toBe(1);
	});

	it('replaces form with success message on filled out form submission', () => {
		const wrapper = mount(<Contact />);
		wrapper.find('#contactName').simulate('change', {target:{value: 'test'}});
		wrapper.find('#contactEmail').simulate('change', {target:{value: 'test@test.com'}});
		wrapper.find('#contactSubject').simulate('change', {target:{value: 'test'}});
		wrapper.find('#contactBody').simulate('change', {target:{value: 'test'}});
		wrapper.find('button').simulate('click');
		setTimeout(function(){
			expect(wrapper.find('input').length).toBe(0);
			expect(wrapper.find('textarea').length).toBe(0);
			expect(wrapper.find('button').length).toBe(0);
			expect(wrapper.contains('Your contact request has been sent.')).toBeTruthy();
		});
	});
})