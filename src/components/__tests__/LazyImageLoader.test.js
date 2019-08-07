import React from 'react'
import {shallow, mount} from 'enzyme';
import {Image} from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import LazyImageLoader from '../LazyImageLoader'
import image from './tiny_test.jpg'

describe('<LazyImageLoader />', () => {
	it('shallow renders without crashing', ()=>{
		shallow(<LazyImageLoader />);
	});

	it('shallow renders the lazyload component', ()=>{
		const wrapper = shallow(<LazyImageLoader />);
		expect(wrapper.exists(LazyLoad)).toEqual(true);
	});

	it('passes className down to child div on shallow render', ()=>{
		const wrapper = shallow(<LazyImageLoader className="testClass" />);
		expect(wrapper.exists('.testClass')).toEqual(true);
	});

	it('passes alt down to child element on shallow render', ()=>{
		const wrapper = shallow(<LazyImageLoader alt="testAlt" />);
		expect(wrapper.exists({alt:"testAlt"})).toEqual(true);
	});

	it('passes image down to child element on shallow render', ()=>{
		const wrapper = shallow(<LazyImageLoader image={image} />);
		expect(wrapper.exists({src:image})).toEqual(true);
	});	

	it('fully renders without crashing', ()=>{
		mount(<LazyImageLoader />);
	});

	it('passes tiny image down to child element on render', ()=>{
		const wrapper = mount(<LazyImageLoader tinyImage={image} />);
		expect(wrapper.exists({src:image})).toEqual(true);
	});
});