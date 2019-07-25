import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
import styles from './MyStyle.module.css'
import sharedStyles from '../SharedStyles.module.css'
import LazyLoad from 'react-lazyload'

import image from './img/my_style.jpg'
import image_tiny from './img/my_style_tiny.jpg'

export default class MyStyle extends React.Component{
	render(){
		return(
			<div className={styles.myStyleContainer}>
				<Row className='justify-content-center'>
					<h3 className={styles.myStyleHeader + " animated fadeIn"}>My Style</h3>
				</Row>
				<Row>
					<Col>
						<Col>
							<div>
								<LazyLoad
									placeholder={<Image className={styles.lazy} src={image_tiny} alt="My Style"/>}
									width={100}
									height={100}
									debounce={false}
									offsetVertical={300}
									once={true}
									>
										<Image className={styles.myStyleImage + " animated fadeInLeft delay-1s slow"} src={image} alt="My Style"/>
								</LazyLoad>
							</div>
						</Col>
					</Col>
					<Col>
						<div className="animated fadeInRight delay-1s slow">Placeholder Text</div>
					</Col>
				</Row>
			</div>
			)
	}
}