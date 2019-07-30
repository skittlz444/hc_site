import React from 'react'
import styles from './SuspensePlaceholder.module.css'

export default class SuspensePlaceholder extends React.Component{
	render(){
		return(
				<div className={styles.suspenseContainer + ' animated infinite pulse'}>
					<h3>Loading...</h3>
				</div>
			)
	}
}