import React from 'react';
import { Card, CardBody, Button, FormGroup, Label, Input } from 'reactstrap';

class CreateNewRole extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<div className='card-container single-form'>
					<Card className='Card long'>
						<CardBody>
							<h1 className='title'>Create A New Role</h1>
							<form>
								<FormGroup>
									<Label for='name'>Position</Label>
									<Input type='text' name='name' id='name' placeholder='Enter your name' />
								</FormGroup>
								<FormGroup>
									<Label for='exampleEmail'>Skills</Label>
									<Input type='email' name='email' id='exampleEmail' placeholder='john@example.com' />
								</FormGroup>
								<FormGroup>
									<Label for=''>Location</Label>
									<Input type='text' name='' id='' placeholder='https://www.myWebsite.com' />
								</FormGroup>
								<FormGroup>
									<Label for='github'>Experience</Label>
									<Input type='text' name='github' id='github' placeholder='https://github.com/userName' />
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

export default CreateNewRole;
