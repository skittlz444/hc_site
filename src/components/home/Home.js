import React from 'react';
import AboutMe from './AboutMe'
import MyStyle from './MyStyle'
import PersonalSide from './PersonalSide'
import WOW from 'wowjs'

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