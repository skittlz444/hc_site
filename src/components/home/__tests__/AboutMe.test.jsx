import React from 'react';
import {shallow, mount} from 'enzyme';

import AboutMe from '../AboutMe';
import backgroundImage from '../img/hero.jpeg';
import backgroundTiny from '../img/hero_tiny.jpg';
import LazyImageLoader from '../../shared/LazyImageLoader';

describe('<AboutMe />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<AboutMe />);
	});

	it('renders <LazyImageLoader /> component on shallow render', ()=>{
		const wrapper = shallow(<AboutMe />);
		expect(wrapper.exists(LazyImageLoader)).toBeTruthy();
	});

	it('gets images from correct locations', ()=>{
		const wrapper = shallow(<AboutMe />);
		expect(wrapper.exists({tinyImage: backgroundTiny})).toBeTruthy();
		expect(wrapper.exists({image: backgroundImage})).toBeTruthy();
	});

	it('fully renders without crashing', ()=>{
		mount(<AboutMe />);
	});
});