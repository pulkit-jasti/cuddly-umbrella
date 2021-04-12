import React from 'react';
import { FormGroup, Input, Button, Card, CardBody, Label, FormText } from 'reactstrap';

class CompanyLogin extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<div className='card-container single-form'>
					<Card className='Card' style={{ width: '500px' }}>
						<CardBody>
							<h2 className='title'>Company Login</h2>
							<form>
								<FormGroup>
									<Label for='exampleEmail'>Email address</Label>
									<Input type='email' name='email' id='exampleEmail' placeholder='john@example.com' />
								</FormGroup>
								<FormGroup>
									<Label for='examplePassword'>Password</Label>
									<Input type='password' name='password' id='examplePassword' placeholder='Password' autoComplete='off' />
								</FormGroup>
								<Button color='primary' type='submit'>
									Login
								</Button>
								<FormText color='muted'>
									Do not have an account ? <a href='#'>Create a new one</a>
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

export default CompanyLogin;
