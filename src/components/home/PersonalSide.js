import React from 'react';
import {Row, Col} from 'react-bootstrap'
import styles from './PersonalSide.module.css'

import image from './img/personal_side.jpeg'
import image_tiny from './img/personal_side_tiny.jpeg'
import LazyImageLoader from '../placeholders/LazyImageLoader'

export default class PersonalSide extends React.Component{
	render(){
		return(
			<div className={styles.personalSideContainer}>
				<Row className={styles.personalSideRow +' justify-content-center'}>
					<h3 className={styles.personalSideHeader + " wow fadeIn"}>The Personal Side</h3>
				</Row>
				<Row className={styles.personalSideRow}>
					<Col className={styles.personalSideCol} lg={{order:2}}>
						<Col>
							<div>
								<LazyImageLoader tinyImage={image_tiny} image={image} alt="Personal Side" className={styles.personalSideImage + ' wow fadeInRight slow'}/>
							</div>
						</Col>
					</Col>
					<Col className={styles.personalSideCol} lg={{order:1}}>
						<Col>
							<div className=" wow fadeInLeft slow">
								<div className={styles.personalSideTextGroup}>
									<h4>
										<span>There is more to an employee than a tool. </span><span>There is also a person.</span>
									</h4>
									<h5>
										So who am I as a person?
									</h5>
								</div>
								<div className={styles.personalSideTextGroup}>
									<p>I'm a reader, a gamer, a thinker</p>
									<p>A hiker, an outdoorsman, a coffee enthusiast</p>
									<p>A guitarist, a Monstercat family member, a music lover</p>
								</div>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		);
	}
}