import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

class JobCard extends React.Component {
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
					<h2 className='title'>{this.props.CompanyName}</h2>
					<h5 className='h4'>Status: {this.state.jobStatus}</h5>
					<h5 className='description h5'>{this.props.CompanyDescription}</h5>
					<div className='btn-container'>
						<Button color='primary'>
							{this.state.jobStatus === 'Interviewed'
								? 'Accept Offer'
								: this.state.jobStatus === 'Matched'
								? 'Schedule an Interview'
								: 'Error fetching job status'}
						</Button>
						<Button color='default'>Message</Button>
					</div>
				</CardBody>
			</Card>
		);
	}
}

export default JobCard;
