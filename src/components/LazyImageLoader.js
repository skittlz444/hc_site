import React from 'react'
import {Image} from 'react-bootstrap'
import styles from './LazyImageLoader.module.css'
import LazyLoad from 'react-lazyload'

export default class LazyImageLoader extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
		this.loaded = this.loaded.bind(this);
		this.imageContainerRef = React.createRef();
	}

	loaded(){
		this.imageContainerRef.current.classList.remove(styles.lazy);
	}

	render(){
		return(
			<div ref={this.imageContainerRef} className={this.props.className + ' ' + styles.lazy}>
				<LazyLoad
					placeholder={
						<Image className={styles.image} src={this.props.tinyImage}  alt={this.props.alt}/>
					}
					width={100}
					height={100}
					offsetVertical={500}
					once={true}
					>
						<Image className={styles.image} src={this.props.image} onLoad={this.loaded} alt={this.props.alt}/>
				</LazyLoad>
			</div>
			)
	}
}