import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

class Home extends React.Component {
	render() {
		return (
			<main className='single-card-page'>
				<NavigationBar />
				<div className='card-container home single-form'>
					<Card className='Card' style={{ width: '400px' }}>
						<CardBody>
							<div className='btn-container'>
								<Link to='/candidate-login'>
									<Button color='primary'>Candidate Login</Button>
								</Link>
								<p className='or'>or</p>
								<Link to='/company-login'>
									<Button color='primary'>Company Login</Button>
								</Link>
							</div>
						</CardBody>
					</Card>
				</div>
			</main>
		);
	}
}

export default Home;
