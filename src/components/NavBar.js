import React from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'

export default class MyNavBar extends React.Component{
	render(){
		return (
				<Navbar className={styles.navContainer} bg="dark" variant="dark" expand="md" sticky="top">
					<Navbar.Brand className={styles.navBrand}>
						<MediaQuery minWidth={450}>
						{(matches)=>{
							if (matches){
								return (
									<h2 className={styles.whiteText}>
										Hayden Carson
									</h2>)
							} else {
								return (
									<h2 className={styles.whiteText}>
										H.Carson 
									</h2>
								)
							}
							}
						}
						</MediaQuery>
					</Navbar.Brand>
					<MediaQuery minWidth={600}>
						<Navbar.Brand className={styles.navBrandSubHeadings}>
							<p className={styles.whiteText}>Software Engineer</p><p className={styles.whiteText}>Web Developer</p>
						</Navbar.Brand>
					</MediaQuery>
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