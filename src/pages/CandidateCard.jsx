import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

class CandidateCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobStatus: this.props.JobStatus,
		};
	}

	render() {
		return (
			<Card className='Card' style={{ width: '900px' }}>
				<CardBody>
					<h2 className='title'>{this.props.Name}</h2>
					<h5 className='h4'>Skills: {this.props.Skills}</h5>
					<h5 className='h4'>Location: {this.props.Location}</h5>
					<h5 className='description h5'>{this.props.Description}</h5>
					<div className='btn-container candidate'>
						<div>
							<Button color='primary'>Schedule An Interview</Button>
							<Button color='default'>Message</Button>
						</div>
						<Button color='danger'>Reject</Button>
					</div>
				</CardBody>
			</Card>
		);
	}
}

export default CandidateCard;
