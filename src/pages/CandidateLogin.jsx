import React from 'react';
import { FormGroup, Input, Button, Card, CardBody, Label, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

class CandidateLogin extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<NavigationBar />
				<div className='card-container single-form'>
					<Card className='Card' style={{ width: '500px' }}>
						<CardBody>
							<h2 className='title'>Candidate Login</h2>
							<form>
								<FormGroup>
									<Label for='exampleEmail'>Email address</Label>
									<Input type='email' name='email' id='exampleEmail' placeholder='john@example.com' />
								</FormGroup>
								<FormGroup>
									<Label for='examplePassword'>Password</Label>
									<Input type='password' name='password' id='examplePassword' placeholder='Password' autoComplete='off' />
								</FormGroup>
								<Link to='/job-list'>
									<Button color='primary' type='submit'>
										Login
									</Button>
								</Link>
								<FormText color='muted'>
									Do not have an account ?<Link to='/candidate-signup'>Create a new one</Link>
								</FormText>
								<FormText color='muted'>
									Forgot password ? <a href='#'>Reset</a>
								</FormText>
							</form>
						</CardBody>
					</Card>
				</div>
			</main>
		);
	}
}

export default CandidateLogin;
