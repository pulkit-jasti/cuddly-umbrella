import React from 'react';
import ThemeContextWrapper from '../components/ThemeWrapper/ThemeWrapper';

import { Card, CardImg, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegComplete extends React.Component {
	state = { timelineState: 1 };

	render() {
		return (
			<ThemeContextWrapper>
				<div className='Timeline-container'>
					<ul class='timeline' id='timeline'>
						<li class={this.state.timelineState >= 1 ? 'li complete' : 'li'}>
							<div class='status'>
								<h4>Profile Submitted</h4>
							</div>
						</li>
						<li class={this.state.timelineState >= 2 ? 'li complete' : 'li'}>
							<div class='status'>
								<h4>Assessment</h4>
							</div>
						</li>
						<li class={this.state.timelineState >= 3 ? 'li complete' : 'li'}>
							<div class='status'>
								<h4>Matching With Companies</h4>
							</div>
						</li>
						<li class={this.state.timelineState >= 4 ? 'li complete' : 'li'}>
							<div class='status'>
								<h4>Live on Platform</h4>
							</div>
						</li>
						<li class={this.state.timelineState >= 5 ? 'li complete' : 'li'}>
							<div class='status'>
								<h4>Interview Requests and offers</h4>
							</div>
						</li>
					</ul>
				</div>

				<main className='single-card-page'>
					<div className='card-container'>
						<Card style={{ width: '600px' }} className='Card'>
							<CardBody>
								<h1 className='title'>Registration Complete</h1>
								<CardText>You have successfully submitted your profile</CardText>
								<CardText>We will review your profile and invite you for further assessment</CardText>
								<div className='button-container'>
									<Button color='primary'>Invite</Button>
									<Button>Preview Profile</Button>
								</div>
							</CardBody>
						</Card>
					</div>
				</main>
			</ThemeContextWrapper>
		);
	}
}

export default RegComplete;
