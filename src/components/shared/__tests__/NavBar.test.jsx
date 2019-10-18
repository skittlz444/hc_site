import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {shallow, mount} from 'enzyme';
import {Brand} from 'react-bootstrap/Navbar';
import {Link as NavLink} from 'react-bootstrap/Nav';

import MyNavBar from '../NavBar';

//Note that the tests must be run under a router as react throws an error if a link is used out of a router (links are used in mynavbar)
describe('<MyNavBar />', ()=>{
	it('shallow renders without crashing', ()=>{
		shallow(<MyNavBar />);
	});

	it('shallow render contains 2 <Navbar.Brand /> components', ()=>{
		const wrapper = shallow(<MyNavBar />);
		expect(wrapper.find(Brand).length).toBe(2);
	});

	it('shallow render contains 2 <Nav.Link /> components', ()=>{
		const wrapper = shallow(<MyNavBar />);
		expect(wrapper.find(NavLink).length).toBe(2);
	});

	it('shallow render contains 2 <Link /> components', ()=>{
		const wrapper = shallow(<MyNavBar />);
		expect(wrapper.find(Link).length).toBe(2);
	})

	it('fully renders without crashing', ()=>{
		mount(
			<Router>
				<MyNavBar/>
			</Router>
		);
	});
});