import React from 'react'
import {Image} from 'react-bootstrap'
import styles from './LazyImageLoader.module.css'
import LazyLoad from 'react-lazyload'

export default class LazyImageLoader extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
	}

	render(){
		return(
			<div ref={this.imageContainerRef} className={this.props.className}>
				<LazyLoad
					placeholder={
						<Image className={styles.image} src={this.props.tinyImage}  alt={this.props.alt}/>
					}
					width={100}
					height={100}
					offsetVertical={500}
					once={true}
					>
						<Image className={styles.image} src={this.props.image} alt={this.props.alt}/>
				</LazyLoad>
			</div>
			)
	}
}