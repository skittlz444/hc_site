import React from 'react'
import {Image, Spinner} from 'react-bootstrap'
import styles from './LazyImageLoader.module.css'
import LazyLoad from 'react-lazyload'

export default class LazyImageLoader extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
	}

	render(){
		return(
			<div className={this.props.className}>
				<LazyLoad
					placeholder={
						<div className={styles.lazy}>
							<Image className={styles.image} src={this.props.tinyImage}  alt={this.props.alt}/>
							<div className={styles.spinnerContainer}>
								<Spinner animation="border" className={styles.spinner} variant="secondary" as="span"/>
							</div>
						</div>
					}
					width={100}
					height={100}
					debounce={false}
					offsetVertical={500}
					once={true}
					>
						<div>
							<Image className={styles.image} src={this.props.image} alt={this.props.alt}/>
						</div>
				</LazyLoad>
			</div>
			)
	}
}