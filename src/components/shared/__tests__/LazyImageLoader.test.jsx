import React from 'react';
import {shallow, mount} from 'enzyme';
import {Image} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

import image from './tiny_test.jpg';
import LazyImageLoader from '../LazyImageLoader';

describe('<LazyImageLoader />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<LazyImageLoader />);
	});

	it('shallow renders the lazyload component', ()=>{
		const wrapper = shallow(<LazyImageLoader />);
		expect(wrapper.exists(LazyLoad)).toBeTruthy();
	});

	it('passes className down to child div on shallow render', ()=>{
		const wrapper = shallow(<LazyImageLoader className="testClass" />);
		expect(wrapper.exists('.testClass')).toBeTruthy();
	});

	it('passes alt down to child element on shallow render', ()=>{
		const wrapper = shallow(<LazyImageLoader alt="testAlt" />);
		expect(wrapper.exists({alt:"testAlt"})).toBeTruthy();
	});

	it('passes image down to child element on shallow render', ()=>{
		const wrapper = shallow(<LazyImageLoader image={image} />);
		expect(wrapper.exists({src:image})).toBeTruthy();
	});	

	it('fully renders without crashing', ()=>{
		mount(<LazyImageLoader />);
	});

	it('passes tiny image down to child element on render', ()=>{
		const wrapper = mount(<LazyImageLoader tinyImage={image} />);
		expect(wrapper.exists({src:image})).toBeTruthy();
	});
});