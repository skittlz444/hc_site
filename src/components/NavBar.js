import React from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default class MyNavBar extends React.Component{
	render(){
		return (
				<Navbar className={styles.navContainer} bg="dark" variant="dark" expand="sm" sticky="top">
					<Navbar.Brand className={styles.navBrand}>
						<h2>
							Hayden Carson
						</h2>
					</Navbar.Brand>
					<Navbar.Brand className={styles.navBrandSubHeadings}>
						<p>Software Engineer</p><p>Web Developer</p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse className="justify-content-end">
						<Nav className={styles.navLinksContainer}>
						
							<Nav.Link className={styles.navLink}>
								<Link className='nav-link' to={'/'}>Home</Link>
							</Nav.Link>
							<Nav.Link className={styles.navLink}>
								<Link className='nav-link' to={'/contact'}>Contact</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
	}
}