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
						<h2 className={styles.whiteText}>
							Hayden Carson
						</h2>
					</Navbar.Brand>
					<Navbar.Brand className={styles.navBrandSubHeadings}>
						<p className={styles.whiteText}>Software Engineer</p><p className={styles.whiteText}>Web Developer</p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse className="justify-content-end">
						<Nav className={styles.navLinksContainer}>
							<Nav.Link>
								<Link className={styles.navLink + ' nav-link'} to={'/'}>Home</Link>
							</Nav.Link>
							<Nav.Link>
								<Link className={styles.navLink + ' nav-link'} to={'/contact'}>Contact</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
	}
}