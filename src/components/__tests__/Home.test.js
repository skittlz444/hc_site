import React from 'react';
import Home from '../Home';
import AboutMe from '../home/AboutMe';
import MyStyle from '../home/MyStyle';
import PersonalSide from '../home/PersonalSide';
import {shallow, mount} from 'enzyme';

//supress console warning about mutationobserver not being supported by browser (from WOW.js)
console.warn = jest.fn();

describe('<Home />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<Home />);
	});

	it('shallow renders the 3 child components', ()=>{
		const wrapper = shallow(<Home />);
		expect(wrapper.exists(AboutMe)).toEqual(true);
		expect(wrapper.exists(PersonalSide)).toEqual(true);
		expect(wrapper.exists(MyStyle)).toEqual(true);
	});

	it('full renders without crashing', ()=>{
		mount(<Home />);
	});
})