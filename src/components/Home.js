import React from 'react';
import AboutMe from './home/AboutMe'
import MyStyle from './home/MyStyle'
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
			</div>
		);
	}
}