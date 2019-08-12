import React from 'react';
import {shallow, mount} from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<Footer/>);
	});

	it('fully renders without crashing', ()=>{
		mount(<Footer/>);
	});

	it('renders link to linkedin', ()=>{
		const wrapper = mount(<Footer/>);
		expect(wrapper.exists({alt:'https://www.linkedin.com/in/haydencarson'})).toBeTruthy();
	});

	it('renders link to github', ()=>{
		const wrapper = mount(<Footer/>);
		expect(wrapper.exists({alt:'https://github.com/skittlz444'})).toBeTruthy();
	});
})