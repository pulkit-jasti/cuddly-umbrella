import React from 'react';
import { FormGroup, Input, Button, Card, CardBody, Label, FormText } from 'reactstrap';
import './signup/signup.scss';

class CompanySignup extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<div className='card-container single-form'>
					<Card className='Card' style={{ width: '500px' }}>
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
			</main>
		);
	}
}

export default CompanySignup;
