import React from 'react';
import { FormGroup, Input, Button, Card, CardBody, Label, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

class CandidateSignup extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<NavigationBar />
				<div className='card-container single-form'>
					<Card className='Card' style={{ width: '500px' }}>
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
								<Link to='/complete-profile'>
									<Button color='primary' type='submit'>
										Sign-Up
									</Button>
								</Link>
								<FormText color='muted'>
									Already have an account <Link to='/candidate-login'>Login</Link>
								</FormText>
							</form>
						</CardBody>
					</Card>
				</div>
			</main>
		);
	}
}

export default CandidateSignup;
