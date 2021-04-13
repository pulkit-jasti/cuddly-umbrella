import React from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<Navbar expand='lg' color='dark'>
				<Container>
					<div className='navbar-translate'>
						<NavbarToggler onClick={this.toggle}>
							<span className='navbar-toggler-bar navbar-kebab'></span>
							<span className='navbar-toggler-bar navbar-kebab'></span>
							<span className='navbar-toggler-bar navbar-kebab'></span>
						</NavbarToggler>
					</div>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem active>
								<NavLink href='/'>Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#'>Profile</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#'>Status</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#'>Invite</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/'>Sign-out</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default NavigationBar;
