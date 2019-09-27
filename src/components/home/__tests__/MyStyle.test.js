import React from 'react'
import {shallow, mount} from 'enzyme';
import LazyImageLoader from '../../shared/LazyImageLoader';
import MyStyle from '../MyStyle'
import myStyleTiny from '../img/my_style_tiny.jpg'
import myStyleImage from '../img/my_style.jpg'

describe("<MyStyle />", () => {

	it('shallow renders without crashing', ()=>{	
		shallow(<MyStyle />);
	});

	it('renders <LazyImageLoader /> component on shallow render', ()=>{
		const wrapper = shallow(<MyStyle />);
		expect(wrapper.exists(LazyImageLoader)).toBeTruthy();
	});

	it('renders heading text on shallow render', () => {
		const wrapper = shallow(<MyStyle />);
		expect(wrapper.contains('My Style')).toBeTruthy();
	});

	it('gets images from correct locations', ()=>{
		const wrapper = shallow(<MyStyle />);
		expect(wrapper.exists({tinyImage: myStyleTiny})).toBeTruthy();
		expect(wrapper.exists({image: myStyleImage})).toBeTruthy();
	});

	it('fully renders without crashing', ()=>{
		mount(<MyStyle />);
	});
});