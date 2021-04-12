import React from 'react';
import { Card, CardBody, Button, FormGroup, Label, Input } from 'reactstrap';

class ProfileForm extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<div className='card-container'>
					<Card className='Card long'>
						<CardBody>
							<h1 className='title'>Complete your Profile</h1>
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
									<Label for=''>Website</Label>
									<Input type='text' name='' id='' placeholder='https://www.myWebsite.com' />
								</FormGroup>
								<FormGroup>
									<Label for='github'>GitHub</Label>
									<Input type='text' name='github' id='github' placeholder='https://github.com/userName' />
								</FormGroup>
								<FormGroup>
									<Label for=''>LinkedIn</Label>
									<Input type='text' name='' id='' placeholder='https://www.linkedin.com/userName' />
								</FormGroup>
								<FormGroup>
									<Label for=''>Dribble</Label>
									<Input type='text' name='' id='' placeholder='https://dribbble.com/userName' />
								</FormGroup>
								<FormGroup>
									<Label for='examplePassword'>Password</Label>
									<Input type='password' name='password' id='examplePassword' placeholder='Password' autoComplete='off' />
								</FormGroup>
								{/* <FormGroup>
										<Label for='resume'>Resume</Label>
										<input type='file' />
									</FormGroup> */}
								<FormGroup>
									<Label for='exp'>Experience</Label>
									<Input type='text' name='exp' id='exp' placeholder='1-10 Years/Student' />
								</FormGroup>
								<FormGroup>
									<Label for=''>Past Roles</Label>
									<Input type='text' name='roles' id='roles' placeholder='Example: Intern at google' />
								</FormGroup>
								<FormGroup>
									<Label for=''>About</Label>
									<Input type='textarea' name='' id='' placeholder='Tell us about yourself' />
								</FormGroup>
								<FormGroup>
									<Label for=''>Competitive Programming Profiles</Label>
									<Input type='textarea' name='' id='' placeholder='' />
								</FormGroup>
								<Button color='primary' type='submit'>
									Submit
								</Button>
							</form>
						</CardBody>
					</Card>
				</div>
			</main>
		);
	}
}

export default ProfileForm;
