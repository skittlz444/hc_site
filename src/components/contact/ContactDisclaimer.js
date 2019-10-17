import React from 'react';
import styles from './ContactDisclaimer.module.css'
import {Row, Col, Container} from 'react-bootstrap'

export default class ContactDisclaimer extends React.Component{
	render(){
		return (
			<Container className={styles.disclaimerContainer}>
				<Row>
					<Col>
						<div className={`${styles.greyText} ${styles.disclaimerTerms}`}>
							I will never knowingly disclose your personal information to any third party.
						</div>
						<div className={`${styles.greyText} ${styles.disclaimerTerms}`}> 
							Nor will I attempt to infringe on intellectual property. 
							All non technical ideas discussed between us are your property. 
							Ideas submitted in the supplied form must be yours or those of some entity you represent.
							In the case that your idea(s) infringes upon anothers intellectual property, I claim no responsibility.
							In the case that my implementation of your un-infringing idea(s) infringes on intellectual property, I claim responsibility.
							By submitting the below form you acknowledge the above terms.
						</div>
						<div className={`${styles.greyText} ${styles.disclaimerTerms}`}>
							The above terms may be subject to change on a case by case basis.
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}