import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Contact.module.css';
import ContactDisclaimer from './ContactDisclaimer';
import ContactForm from './ContactForm';

export default class Contact extends React.Component{
	render(){
		return (
			<div className={styles.contactContainer}>
				<Container>
					<Row>
						<Col className={styles.contactHeader}>
							<h3 className={styles.whiteText}>Contact Me</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<h4 className={styles.whiteText}>
								Please enter your contact information and enquiry below, I will reach out as soon as I am able.
							</h4>
						</Col>
					</Row>
					<Row>
						<ContactDisclaimer />
					</Row>
					<Row>
						<ContactForm />
					</Row>
				</Container>
			</div>
		);
	};
};