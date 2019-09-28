import React from 'react';
import styles from './ContactForm.module.css'
import {Row, Col, Form, Button, Container} from 'react-bootstrap'

export default class ContactForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			errors: null
		};
		this.form = React.createRef();
		this.validate = this.validate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}

	validate() {
		return this.form.current.reportValidity();
	}

	handleFormSubmit(e){
		if(!this.validate()){
			// alert("INVALID");
			this.setState({['errors']: "It appears something is wrong with your information, please check your details and ensure everything is filled out and correct."})
			e.preventDefault();
			e.stopPropagation();
		} else{
			this.setState({['errors']: ""})
			alert("submitted");
			e.preventDefault();
			e.stopPropagation();
		}
		
	}

	render(){
		return(
			<Container>
				<Row>
					<Col className={styles.errors}>
						{this.state.errors}
					</Col>
				</Row>
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