import React from 'react';
import styles from './Contact.module.css'
import {Row, Col, Form, Button, Container} from 'react-bootstrap'

export default class Contact extends React.Component{
	constructor(props){
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}
	handleFormSubmit(e){
		if(e.currentTarget.checkValidity() === false){
			// alert("INVALID");
			e.preventDefault();
			e.stopPropagation();
		} else{
			// alert("submitted");
			e.preventDefault();
			e.stopPropagation();
		}
		
	}

	render(){
		return (
			<div className={styles.contactContainer}>
				<Container>
					<Row>
						<Col className={styles.contactHeader}>
							<h3 className={styles.whiteText}>Contact Me</h3>
						</Col>
					</Row>
					<Form>
						<Row>
							<InputHalfWidth controlId="contactName" placeholder="Who are you?"/>
							<InputHalfWidth controlId="contactEmail" placeholder="What is your email?"/>
							<InputFullWidth controlId="contactSubject" placeholder="How can I help you?"/>
							<TextAreaFullWidth controlId="contactBody" placeholder="Lets talk specifics."/>
						</Row>
						<Row>
							<Col className="justify-content-center">
								<Button variant="secondary" onClick={this.handleFormSubmit} type="submit">
									Send me an email
								</Button>
							</Col>
						</Row>
					</Form>
				</Container>
			</div>
		);
	}
}

const TextAreaFullWidth = (props) => {
	return(
		<Col lg={12} xs={12} sm={12} md={12}>
			<Form.Group controlId={props.controlId}>
				<Form.Control as="textarea" rows={5} required placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
	)
}

const InputFullWidth = (props) => {
	return(
		<Col lg={12} xs={12} sm={12} md={12}>
			<Form.Group controlId={props.controlId}>
				<Form.Control type="text" required placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
		)
}

const InputHalfWidth = (props) => {
	return(
		<Col lg={6} xs={12} sm={12} md={6}>
			<Form.Group controlId={props.controlId}>
				<Form.Control type="text" required placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
		)
}