import React from 'react';
import styles from './ContactForm.module.css'
import {Row, Col, Form, Button, Container} from 'react-bootstrap'
import {toast} from 'react-toastify';

export default class ContactForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			errors: null
		};
		this.toastID = null;
		this.form = React.createRef();
		this.validate = this.validate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}

	validate() {
		return this.form.current.reportValidity();
	}

	handleFormSubmit(e){
		if(!this.validate()){
			if (!toast.isActive(this.toastID))
				this.toastID = toast.error(<span className={styles.whiteText}>It appears something is wrong with your information, please check your details and ensure everything is filled out and correct.</span>,
					{autoClose: false});
			e.preventDefault();
			e.stopPropagation();
		} else{
			toast.dismiss();
			this.toastID = toast.success(<span className={styles.whiteText}>Thank you for submitting a contact request! I'll be in touch within the next few days so keep an eye out in your emails, including your junk folder.</span>,
					{autoClose: false});
			e.preventDefault();
			e.stopPropagation();
		}
		
	}

	render(){
		return(
			<Container>
				<Form ref={this.form}>
					<Row>
						<InputHalfWidth controlId="contactName" placeholder="Who are you?"/>
						<InputHalfWidth controlId="contactEmail" type="email" placeholder="What is your email?"/>
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
				<Form.Control type={props.type == null? "text": props.type} required placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
		)
}

const InputHalfWidth = (props) => {
	return(
		<Col lg={6} xs={12} sm={12} md={6}>
			<Form.Group controlId={props.controlId}>
				<Form.Control type={props.type == null? "text": props.type} required placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
		)
}