import React from 'react';
import {Row, Col, Image, Container} from 'react-bootstrap'
import styles from './AboutMe.module.css'
import LazyLoad from 'react-lazyload'
import hero from './img/about_me_background.jpg'
import hero_tiny from './img/about_me_background_tiny.jpg'

export default class AboutMe extends React.Component{
	render(){
		return(
				<Row className={styles.aboutContainer}>
					<Col lg={{order:1}} className={styles.aboutMeCol + " wow fadeInLeft"}>
						<Container>
							<Row className={styles.aboutMeRow}>
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
							</Row>
							<Row >
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
							</Row>
						</Container>
					</Col>
					<Col className={styles.aboutMeCol + " " + styles.aboutMeHeroContainer + " wow fadeInRight"} lg={{order:2}}>
						<Col className={styles.aboutMeHeroContainer}>
							<div>
								<LazyLoad
									placeholder={<Image className={styles.lazy} src={hero_tiny} alt="Hero"/>}
									width={100}
									height={100}
									debounce={false}
									offsetVertical={300}
									once={true}
									>
										<Image className={styles.heroImage} src={hero} alt="Hero"/>
								</LazyLoad>
							</div>
						</Col>
					</Col>
					
				</Row>
		)
	}
}