import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
import styles from './PersonalSide.module.css'
import LazyLoad from 'react-lazyload'

import image from './img/personal_side.jpeg'
import image_tiny from './img/personal_side_tiny.jpeg'

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
								<LazyLoad
									placeholder={<Image className={styles.personalSideImage + " wow fadeInRight slow"} src={image_tiny} alt="Personal Side"/>}
									width={100}
									height={100}
									debounce={false}
									offsetVertical={500}
									once={true}
									>
										<Image className={styles.personalSideImage + " wow fadeInRight slow"} src={image} alt="Personal Side"/>
								</LazyLoad>
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
									<p>A rugby player, a hiker, an outdoorsman</p>
									<p>A guitarist, a Monstercat Family member, a music lover</p>
								</div>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		);
	}
}