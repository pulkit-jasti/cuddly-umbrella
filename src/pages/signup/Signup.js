import ThemeContextWrapper from '../../components/ThemeWrapper/ThemeWrapper';
//import BackgroundColorWrapper from '../../components/BackgroundColorWrapper/BackgroundColorWrapper';

import AdminLayout from 'layouts/Admin/Admin.js';
import RTLLayout from 'layouts/RTL/RTL.js';
import React from 'react';
import './signup.scss';

//navbar
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Form, FormGroup, Input, Button } from 'reactstrap';

//card
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

//forms
import { Label, FormText } from 'reactstrap';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class Signup extends React.Component {
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
			<ThemeContextWrapper>
				{/* <BackgroundColorWrapper>
					<BrowserRouter>
						<Switch>
							<Route path='/admin' render={props => <AdminLayout {...props} />} />
							<Route path='/rtl' render={props => <RTLLayout {...props} />} />
							<Redirect from='/' to='/admin/dashboard' />
						</Switch>
					</BrowserRouter>
				</BackgroundColorWrapper> */}
				<main className='signup'>
					<Navbar expand='lg' color='dark'>
						<Container>
							<div className='navbar-translate'>
								{/* <NavbarBrand>Navbar</NavbarBrand> */}
								<NavbarToggler onClick={this.toggle}>
									<span className='navbar-toggler-bar navbar-kebab'></span>
									<span className='navbar-toggler-bar navbar-kebab'></span>
									<span className='navbar-toggler-bar navbar-kebab'></span>
								</NavbarToggler>
							</div>
							<Collapse isOpen={this.state.isOpen} navbar>
								<Nav navbar>
									<NavItem active>
										<NavLink to='#pablo'>Home</NavLink>
									</NavItem>
									<NavItem>
										<NavLink to='#pablo'>Learn More</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</Container>
					</Navbar>
					<div className='card-container'>
						<div className='cards-wrapper'>
							<Card className='Card'>
								<CardBody>
									<h3 className='title'>Candidate Sign-Up</h3>
									<form>
										<FormGroup>
											<Label for='name'>Name</Label>
											<Input type='text' name='name' id='name' placeholder='Enter your name' />
										</FormGroup>
										<FormGroup>
											<Label for='exampleEmail'>Email address</Label>
											<Input type='email' name='email' id='exampleEmail' placeholder='john@example.com' />
										</FormGroup>
										<FormGroup>
											<Label for='examplePassword'>Password</Label>
											<Input type='password' name='password' id='examplePassword' placeholder='Password' autoComplete='off' />
										</FormGroup>
										<Button color='primary' type='submit'>
											Sign-Up
										</Button>
										<FormText color='muted'>
											Already have an account <a href=''>Sign-In</a>
										</FormText>
									</form>
								</CardBody>
							</Card>
							<Card className='Card'>
								<CardBody>
									<h3 className='title'>Company Sign-Up</h3>
									<form>
										<FormGroup>
											<Label for='company-name'>Name</Label>
											<Input type='text' name='name' id='company-name' placeholder='Enter your name' />
										</FormGroup>
										<FormGroup>
											<Label for='companyEmail'>Email address</Label>
											<Input type='email' name='email' id='companyEmail' placeholder='john@example.com' />
										</FormGroup>
										<FormGroup>
											<Label for='companyName'>Company Name</Label>
											<Input type='text' name='name' id='companyName' placeholder='Enter the company name' />
										</FormGroup>
										<FormGroup>
											<Label for='companyPassword'>Password</Label>
											<Input type='password' name='password' id='companyPassword' placeholder='Password' autoComplete='off' />
										</FormGroup>
										<Button color='primary' type='submit'>
											Sign-Up
										</Button>
										<FormText color='muted'>
											Already have an account <a href=''>Sign-In</a>
										</FormText>
									</form>
								</CardBody>
							</Card>
						</div>
					</div>
				</main>
			</ThemeContextWrapper>
		);
	}
}

export default Signup;
