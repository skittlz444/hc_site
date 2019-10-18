import React from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import styles from './AboutMe.module.css'
import hero from './img/hero.jpeg'
import hero_tiny from './img/hero_tiny.jpg'
import LazyImageLoader from '../shared/LazyImageLoader'

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
											Software Developer
										</h3>
										<h5 className={styles.whiteText}>
											Designing sustainable solutions for enterprise challenges
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
											Considering the client at all stages of design
										</h5>
									</div>
								</Col>
							</Row>
						</Container>
					</Col>
					<Col className={styles.aboutMeCol + " " + styles.aboutMeHeroContainer + " wow fadeInRight"} lg={{order:2}}>
						<Col className={styles.aboutMeHeroContainer}>
							<div>
								<LazyImageLoader tinyImage={hero_tiny} image={hero} alt="Hero"/>
							</div>
						</Col>
					</Col>
					
				</Row>
		)
	}
}