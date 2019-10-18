import React from 'react';

import styles from './NotFound.module.css';

export default class NotFound extends React.Component{
	render(){
		return(
			<div className={styles.notFoundContainer}>
				<div className="justify-content-center">
					<h1 className={styles.notFoundText}>
						Sorry, the page you were looking for could not be found
					</h1>
				</div>
			</div>
		);
	}
}