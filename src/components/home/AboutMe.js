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
					<Col md={{order:1}} className={styles.aboutMeCol}>
						<Col>
							<div className={styles.aboutMeText}>
								<h3 className={styles.whiteText}>
									Computer Scientist
								</h3>
								<h5 className={styles.whiteText}>
									Designing efficient solutions for complex challenges
								</h5>
								
							</div>
						</Col>
					</Col>
					<Col className={styles.aboutMeCol} md={{order:2}}>
						<Col>
							<div>
								<LazyLoad
									placeholder={<Image className={styles.lazy} src={hero_tiny} alt="Hero"/>}
									width={100}
									height={100}
									debounce={false}
									offsetVertical={300}
									once={true}
									>
										<Image className={styles.heroImage + " wow fadeIn"} src={hero} alt="Hero"/>
								</LazyLoad>
							</div>
						</Col>
					</Col>
					<Col className={styles.aboutMeCol} md={{order:3}}>
						<Col>
							<div  className={styles.aboutMeText}>
								<h3 className={styles.whiteText}>
									Web Developer
								</h3>
								<h5 className={styles.whiteText}>
									Working with you to build elegant web solutions for your business
								</h5>
							</div>
						</Col>
					</Col>
				</Row>
		)
	}
}