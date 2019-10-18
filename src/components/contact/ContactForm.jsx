import React from 'react';
import {Row, Col, Form, Button, Container, Spinner} from 'react-bootstrap';
import {toast} from 'react-toastify';

import styles from './ContactForm.module.css';

export default class ContactForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			contactName: '',
			contactEmail: '',
			contactSubject: '',
			contactBody: '',
			loading: false,
			toastID: null
		};

		this.form = React.createRef();
		this.submitButtonContainer = React.createRef();

		this.validate = this.validate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({[e.target.id]: e.target.value});
	}

	validate() {
		return this.form.current.reportValidity();
	}

	handleFormSubmit(e){
		e.preventDefault();
		e.stopPropagation();
		if(!this.validate()){
			if (!toast.isActive(this.state.toastID))
				this.setState({
					'toastID': toast.error(
						<span className={styles.whiteText}>It appears something is wrong with your information, 
						please check your details and ensure everything is filled out and correct.</span>,
					{autoClose: false})
			});
		} else {
			this.setState({loading:true});
			toast.dismiss();
			fetch("https://4it7527y55.execute-api.ap-southeast-2.amazonaws.com/production/contact", {
				method: 'POST',
    			headers: {
      				"Content-type": "application/x-www-form-urlencoded",
    			},
   				body: `{
   					"contactName" : "${this.state.contactName}",
   					"contactEmail" :"${this.state.contactEmail}",
   					"contactSubject" : "${this.state.contactSubject}",
   					"contactBody" : "${this.state.contactBody}"
   					}`
   				}
			)
			.then(res => res.json())
  			.then(
    			(result) => {
    				this.setState({
    					'toastID': toast.success(
    						<span className={styles.whiteText}>Thank you for submitting a contact request! 
    						I'll be in touch within the next few days so keep an eye out in your emails, 
    						including your junk folder.</span>,
						{autoClose: false})
    				});
					this.setState({loading:false});
    			},
    			(error) => {
    				this.setState({
    					'toastID': toast.error(
    						<span className={styles.whiteText}>Something went wrong on our end, 
    						please try again later</span>, 
    						{autoClose:false})
    				});
    				this.setState({loading:false});
    			}
  			);
		}
	}

	render(){
		const button = <Button variant="secondary" onClick={this.handleFormSubmit} type="submit">
						Send me an email
					</Button>;
		const spinner = <Spinner animation="border" />;

		return(
			<Container>
				<Form ref={this.form}>
					<Row>
						<InputHalfWidth controlId="contactName" value={this.state.contactName} onChange={this.handleChange} placeholder="Who are you?"/>
						<InputHalfWidth controlId="contactEmail" value={this.state.contactEmail} onChange={this.handleChange} type="email" placeholder="What is your email?"/>
						<InputFullWidth controlId="contactSubject" value={this.state.contactSubject} onChange={this.handleChange} placeholder="How can I help you?"/>
						<TextAreaFullWidth controlId="contactBody" value={this.state.contactBody} onChange={this.handleChange} placeholder="Lets talk specifics."/>
					</Row>
					<Row>
						<Col className="justify-content-center">
							{this.state.loading?spinner:button}
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
				<Form.Control 
				as="textarea" 
				value={props.value} 
				onChange={props.onChange} 
				rows={5} 
				required 
				placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
	)
}

const InputFullWidth = (props) => {
	return(
		<Col lg={12} xs={12} sm={12} md={12}>
			<Form.Group controlId={props.controlId}>
				<Form.Control 
				type={props.type == null? "text": props.type} 
				value={props.value} 
				onChange={props.onChange} 
				required 
				placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
	)
}

const InputHalfWidth = (props) => {
	return(
		<Col lg={6} xs={12} sm={12} md={6}>
			<Form.Group controlId={props.controlId}>
				<Form.Control 
				type={props.type == null? "text": props.type} 
				value={props.value} 
				onChange={props.onChange} 
				required 
				placeholder={props.placeholder}/>
			</Form.Group>
		</Col>
	)
}
