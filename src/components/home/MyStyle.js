import React from 'react';
import {Row, Col} from 'react-bootstrap'
import styles from './MyStyle.module.css'

import image from './img/my_style.jpg'
import image_tiny from './img/my_style_tiny.jpg'
import LazyImageLoader from '../placeholders/LazyImageLoader'

export default class MyStyle extends React.Component{
	render(){
		return(
			<div className={styles.myStyleContainer}>
				<Row className={styles.myStyleRow +' justify-content-center'}>
					<h3 className={styles.myStyleHeader + " wow fadeIn"}>My Style</h3>
				</Row>
				<Row className={styles.myStyleRow}>
					<Col className={styles.myStyleCol} lg={{order:1}}>
						<Col>
							<div>
								<LazyImageLoader tinyImage={image_tiny} image={image} alt="Personal Side" className={styles.myStyleImage + ' wow fadeInLeft slow'}/>
							</div>
						</Col>
					</Col>
					<Col className={styles.myStyleCol} lg={{order:1}}>
						<Col>
							<div className=" wow fadeInRight slow">
								<div className={styles.myStyleTextGroup}>
									<div className={styles.quoteText}>
										"Mobile is not the future, its the now."
									</div>
									<div className={styles.quoteAuthor}>
										Cyndie Shaffstall, Founder of Spider Trainers
									</div>
								</div>
								<div className={styles.myStyleTextGroup}>
									Every business is unique, every requirement has its own challenges, and every problem has many solutions.
									The trick is to find the most efficient and elegant way of designing and delivering those solutions.
									Years of practice with multiple languages, over a vast variety of tasks has equipped me with the tools required to do exactly that.
								</div>
								<div className={styles.myStyleTextGroup}>
									We live in an increasingly mobile world. That is why when I design web solutions, I design for both desktop and mobile devices, together. 
									Your business should be reachable by anyone, anywhere, on any platform. With me, that's a priority.
								</div>
								<div className={styles.myStyleTextGroup}>
									<div className={styles.quoteText}>
										"Simplicity, carried to the extreme, becomes elegance"
									</div>
									<div className={styles.quoteAuthor}>
										Joe Franklin
									</div>
								</div>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
			)
	}
}