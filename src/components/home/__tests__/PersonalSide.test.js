import React from 'react'
import {shallow, mount} from 'enzyme';
import LazyImageLoader from '../../shared/LazyImageLoader';
import PersonalSide from '../PersonalSide'
import personalSideTiny from '../img/personal_side_tiny.jpg'
import personalSideImage from '../img/personal_side.jpeg'

describe("<PersonalSide />", () => {

	it('shallow renders without crashing', ()=>{	
		shallow(<PersonalSide />);
	});

	it('renders <LazyImageLoader /> component on shallow render', ()=>{
		const wrapper = shallow(<PersonalSide />);
		expect(wrapper.exists(LazyImageLoader)).toBeTruthy();
	});

	it('renders heading text on shallow render', () => {
		const wrapper = shallow(<PersonalSide />);
		expect(wrapper.contains('The Personal Side')).toBeTruthy();
	});

	it('gets images from correct locations', ()=>{
		const wrapper = shallow(<PersonalSide />);
		expect(wrapper.exists({tinyImage: personalSideTiny})).toBeTruthy();
		expect(wrapper.exists({image: personalSideImage})).toBeTruthy();
	});

	it('fully renders without crashing', ()=>{
		mount(<PersonalSide />);
	});
});