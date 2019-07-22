import React from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class MyNavBar extends React.Component{
	render(){
		return (
				<Navbar bg="light" variant="light" expand="sm" sticky="top">
					<Navbar.Brand>
						Hayden Carson
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse className="justify-content-end">
						<Nav className={styles.navLinksContainer}>
						
							<Nav.Link className={styles.navLink}>
								Home
							</Nav.Link>
							<Nav.Link className={styles.navLink}>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
	}
}