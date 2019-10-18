import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Image} from 'react-bootstrap';

import gitHubLogo from './img/GitHub_Logo.png';
import gitHubThumb from './img/GitHub-Mark-32px.png';
import linkedInThumb from './img/LI-Logo.png';
import styles from './Footer.module.css';

export default class Footer extends React.Component{
	render(){
		return(
			<Navbar className={styles.footerContainer + ' justify-content-end'} variant='light' bg='light'>
				<Navbar.Brand inline={"true"}>
					<Nav className="justify-content-end">
						<Nav.Link className='nav-link' href='https://www.linkedin.com/in/haydencarson' target="_blank">
							<Image className={styles.linkLogo} alt='LinkedIn' src={linkedInThumb}/>
						</Nav.Link>
						<Nav.Link className='nav-link' href='https://github.com/skittlz444' target="_blank">
							<Image className={styles.linkLogo} alt="GitHubLogo" src={gitHubThumb}/>
							<Image className={styles.linkLogo} alt='GitHub' src={gitHubLogo}/>
						</Nav.Link>
					</Nav>
				</Navbar.Brand>	
			</Navbar>
		);
	}
}