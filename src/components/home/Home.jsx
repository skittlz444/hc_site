import React from 'react';
import WOW from 'wowjs';

import AboutMe from './AboutMe';
import MyStyle from './MyStyle';
import PersonalSide from './PersonalSide';

export default class Home extends React.Component{

	componentDidMount(){
		new WOW.WOW().init();
	}

	render(){
		return (
			<div>
				<AboutMe/>
				<MyStyle/>
				<PersonalSide/>
			</div>
		);
	}
}