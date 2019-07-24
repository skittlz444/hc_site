import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
import styles from './AboutMe.module.css'
import LazyLoad from 'react-lazyload'
import hero from './img/about_me_background.jpg'
import hero_tiny from './img/about_me_background_tiny.jpg'

export default class AboutMe extends React.Component{
	render(){
		return(
				<Row className={styles.aboutMeRow}>
					<Col className={styles.aboutMeCol}>
						<Col>
							<div className={styles.aboutMeText}>
								<h3>
									Computer Scientist
								</h3>
								<h5>
									Designing efficient solutions for complex challenges
								</h5>
								
							</div>
						</Col>
					</Col>
					<Col className={styles.aboutMeCol}>
						<Col>
							<div>
								<LazyLoad
									placeholder={<img className={styles.lazy} src={hero_tiny}/>}
									width={100}
									height={100}
									debounce={false}
									offsetVertical={300}
									once={true}
									>
									<img className={styles.heroImage} src={hero}/>
								</LazyLoad>
								
							</div>
						</Col>
					</Col>
					<Col className={styles.aboutMeCol}>
						<Col>
							<div  className={styles.aboutMeText}>
								<h3>
									Web Developer
								</h3>
								<h5>
									Working with you to build elegant web solutions for your business
								</h5>
							</div>
						</Col>
					</Col>
				</Row>
		)
	}
}