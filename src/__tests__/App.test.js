import React, {Suspense as Sus} from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';
import MyNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SuspensePlaceholder from '../components/placeholders/SuspensePlaceholder'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

describe("<App />", () => {

	it('shallow renders without crashing', ()=>{	
		shallow(<App />);
	});

	it('loads custom child components on shallow render', ()=>{
		const wrapper = shallow(<App />);
		expect(wrapper.exists(MyNavBar)).toBeTruthy();
		expect(wrapper.exists(Footer)).toBeTruthy();
	});

	it('loads routes for home and contact', ()=>{
		const wrapper = shallow(<App />);
		expect(wrapper.exists(Router)).toBeTruthy();
		expect(wrapper.exists(Switch)).toBeTruthy();
		expect(wrapper.find(Route).length).toBe(2);
		expect(wrapper.exists({path:'/'})).toBeTruthy();
		expect(wrapper.exists({path:'/contact'})).toBeTruthy();
	});


	it('fully renders without crashing', ()=>{
		console.warn = jest.fn();
		const wrapper = mount(<App />);
	});
});
