import React from 'react';
import {Row, Col} from 'react-bootstrap';

import image from './img/my_style.jpg';
import image_tiny from './img/my_style_tiny.jpg';
import LazyImageLoader from '../shared/LazyImageLoader';
import styles from './MyStyle.module.css';

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
								<LazyImageLoader 
								tinyImage={image_tiny} 
								image={image} 
								alt="Personal Side" 
								className={styles.myStyleImage + ' wow fadeInLeft slow'}
								/>
							</div>
						</Col>
					</Col>
					<Col className={styles.myStyleCol} lg={{order:1}}>
						<Col>
							<div className=" wow fadeInRight slow">
								<div className={styles.myStyleTextGroup}>
									<div className={styles.quoteText}>
										Code sustainability is more than a principle, it's an imperative
									</div>
								</div>
								<div className={styles.myStyleTextGroup}>
									Enterprise solutions are not about technology, they are about goals and deliverables. 
									Designing a solution is about more than what works now, it is about what will still be working years later, clients later, and many hands later.
								</div>
								<div className={styles.myStyleTextGroup}>
									Architectural design, clear and concise implementation, and a dash of corporate realism, are the factors driving development in the modern world.
									New technologies, new projects, new goals and new experiences, we are never a finished product, and neither is our work.
								</div>
								<div className={styles.myStyleTextGroup}>
									<div className={styles.quoteText}>
										No one is ever finished learning. No one is ever finished growing
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