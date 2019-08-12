import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import styles from './Footer.module.css';
import linkedInThumb from './img/LI-Logo.png'
import gitHubLogo from './img/GitHub_Logo.png'
import gitHubThumb from './img/GitHub-Mark-32px.png'

export default class Footer extends React.Component{
	render(){
		return(
			<Navbar className={styles.footerContainer} variant='light' bg='light'>
				<Navbar.Brand className="justify-content-end">
					<Nav className="justify-content-end">
						<Nav.Link as='span'>
							<a className='nav-link' href='https://www.linkedin.com/in/haydencarson' target="_blank">
								<Image className={styles.linkLogo} alt='LinkedIn' src={linkedInThumb}/>
							</a>
						</Nav.Link>
						<Nav.Link as='span'>
							<a className='nav-link' href='https://github.com/skittlz444' target="_blank">
								<Image className={styles.linkLogo} alt="GitHubLogo" src={gitHubThumb}/>
								<Image className={styles.linkLogo} alt='GitHub' src={gitHubLogo}/>
							</a>
						</Nav.Link>
					</Nav>
				</Navbar.Brand>	
			</Navbar>
		);
	}
}