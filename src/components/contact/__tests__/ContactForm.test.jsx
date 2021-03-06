import React from 'react';
import {shallow, mount} from 'enzyme';
import {Form} from 'react-bootstrap';
import {ToastContainer} from 'react-toastify';

import ContactForm from '../ContactForm';

describe('<ContactForm />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<ContactForm />);
	});

	it('renders form container in shallow render', ()=>{
		const wrapper = shallow(<ContactForm />);
		expect(wrapper.exists(Form)).toBeTruthy();
	});

	it('fully renders without crashing', ()=>{
		mount(<ContactForm />);
	});
	
	it('renders all form components including button on full render', ()=>{
		const wrapper = mount(<ContactForm />);
		expect(wrapper.find('input').length).toBe(3);
		expect(wrapper.find('textarea').length).toBe(1);
		expect(wrapper.find('button').length).toBe(1);
	});

	it('shows warning dialogue if text fields aren\'t filled in when submit is clicked', ()=>{
		const wrapper = mount(
				<div>
    				<ToastContainer/>
    				<ContactForm />
    			</div>);
		wrapper.find('button').simulate('click');
		setTimeout(function(){
			expect(wrapper.contains("It appears something is wrong with your information, please check your details and ensure everything is filled out and correct.")).toBeTruthy();
		});
	});

	it('shows bad email message if email is not formatted correctly', ()=>{
		const wrapper = mount(
				<div>
    				<ToastContainer/>
    				<ContactForm />
    			</div>);
		wrapper.find('#contactName').simulate('change', {target:{value: 'test'}});
		wrapper.find('#contactSubject').simulate('change', {target:{value: 'test'}});
		wrapper.find('#contactBody').simulate('change', {target:{value: 'test'}});
		
		wrapper.find('#contactEmail').simulate('change', {target: {value: 'invalidEmail'}});
		wrapper.find('button').simulate('click');
		setTimeout(function(){
			expect(wrapper.contains("It appears something is wrong with your information, please check your details and ensure everything is filled out and correct.")).toBeTruthy();
		});
	});
});