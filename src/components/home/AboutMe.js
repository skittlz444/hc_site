import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
import styles from './AboutMe.module.css'

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
								<Image className={styles.heroImage} src='https://www.google.com/logos/doodles/2019/childrens-day-2019-indonesia-5074866842632192-2x.png' fluid/>
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