import React from 'react';
import Home from '../Home';
import AboutMe from '../AboutMe';
import MyStyle from '../MyStyle';
import PersonalSide from '../PersonalSide';
import {shallow, mount} from 'enzyme';

//supress console warning about mutationobserver not being supported by browser (from WOW.js)
console.warn = jest.fn();

describe('<Home />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<Home />);
	});

	it('shallow renders the 3 child components', ()=>{
		const wrapper = shallow(<Home />);
		expect(wrapper.exists(AboutMe)).toBeTruthy();
		expect(wrapper.exists(PersonalSide)).toBeTruthy();
		expect(wrapper.exists(MyStyle)).toBeTruthy();
	});

	it('full renders without crashing', ()=>{
		mount(<Home />);
	});
})