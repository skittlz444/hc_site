import React from 'react';
import {shallow, mount} from 'enzyme';
import Footer from '../Footer';
import {BrowserRouter as Router} from 'react-router-dom'

describe('<Footer />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<Footer/>);
	});

	it('fully renders without crashing', ()=>{
		mount(<Router><Footer/></Router>);
	});

	it('renders link to linkedin', ()=>{
		const wrapper = mount(<Router><Footer/></Router>);
		expect(wrapper.exists({href:'https://www.linkedin.com/in/haydencarson'})).toBeTruthy();
	});

	it('renders link to github', ()=>{
		const wrapper = mount(<Router><Footer/></Router>);
		expect(wrapper.exists({href:'https://github.com/skittlz444'})).toBeTruthy();
	});
})