import React from 'react'
import {shallow, mount} from 'enzyme';
import LazyImageLoader from '../../LazyImageLoader';
import AboutMe from '../AboutMe'
import backgroundTiny from '../img/about_me_background_tiny.jpg'
import backgroundImage from '../img/about_me_background.jpg'

describe('<AboutMe />', () => {

	it('shallow renders without crashing', ()=>{
		shallow(<AboutMe />);
	});

	it('renders <LazyImageLoader /> component on shallow render', ()=>{
		const wrapper = shallow(<AboutMe />);
		expect(wrapper.exists(LazyImageLoader)).toBeTruthy();
	});

	it('renders heading text on shallow render', () => {
		const wrapper = shallow(<AboutMe />);
		expect(wrapper.contains('Computer Scientist')).toBeTruthy();
		expect(wrapper.contains('Web Developer')).toBeTruthy();
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