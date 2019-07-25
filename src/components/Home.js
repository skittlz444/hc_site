import React from 'react';
import AboutMe from './home/AboutMe'
import MyStyle from './home/MyStyle'

export default class Home extends React.Component{
	render(){
		return (
			<div>
				<AboutMe/>
				<MyStyle/>
			</div>
		);
	}
}