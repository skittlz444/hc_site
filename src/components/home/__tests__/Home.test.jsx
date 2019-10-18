import React from 'react';
import {shallow, mount} from 'enzyme';

import AboutMe from '../AboutMe';
import Home from '../Home';
import MyStyle from '../MyStyle';
import PersonalSide from '../PersonalSide';

//supress console warning about mutationobserver not being supported by browser (from WOW.js)
//unfortunately this supresses all warnings, however we are mainly looking for functional errors
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
});