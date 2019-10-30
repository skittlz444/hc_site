import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

import styles from './NavBar.module.css';

export default class MyNavBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			navToggleOpen: false,
			lastY: 0
		};
		this.handleScroll = this.handleScroll.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(e){
		this.setState({'navToggleOpen':!this.state.navToggleOpen});
		this.setState({'lastY':window.scrollY});
	}

	handleScroll(e){
		if(window.scrollY < this.state.lastY - 50  || window.scrollY > this.state.lastY + 120){
			this.setState({'lastY':window.scrollY});
    		if(this.state.navToggleOpen)
				this.handleToggle();
		}
	}

	componentDidMount() {
    	document.addEventListener('scroll', () => {
    			this.handleScroll();
    	});
  	}

	render(){
		return ( 
			<Navbar expanded={this.state.navToggleOpen} onToggle={this.handleToggle} className={styles.navContainer} bg="dark" variant="dark" expand="md" collapseOnSelect sticky="top">
				<Navbar.Brand className={styles.navBrand}>
					<Nav.Link as='span' bsPrefix="no_class" eventKey>
						<Link to={'/'} >
							<MediaQuery minWidth={450}>
								{
									(matches)=> {
										if (matches){
											return (
												<h2 className={`${styles.whiteText} ${styles.navHeader}`}>Hayden Carson</h2>)
										} else {
											return (
												<h2 className={`${styles.whiteText} ${styles.navHeader}`}>H.Carson</h2>
											)
										}
									}
								}
							</MediaQuery>
						</Link>
					</Nav.Link>
				</Navbar.Brand>
				<MediaQuery minWidth={600}>
					<Navbar.Brand className={styles.navBrandSubHeadings}>
						<p className={styles.whiteText}>Software Developer</p>
						<p className={styles.whiteText}>Web Developer</p>
					</Navbar.Brand>
				</MediaQuery>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse className="justify-content-end">
					<Nav className={styles.navLinksContainer}>
						<Nav.Link as='span' eventKey>
							<Link className={styles.navLink + ' nav-link'} to={'/'}>Home</Link>
						</Nav.Link>
						<Nav.Link as='span' eventKey>
							<Link className={styles.navLink + ' nav-link'} to={'/contact'}>Contact</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}