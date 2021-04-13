import React from 'react';
import CandidateCard from './CandidateCard';
import NavigationBar from './NavigationBar';
import { Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

let sampleDesc = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore laudantium, molestias qui atque quaerat blanditiis,dicta corrupti omnis odio adipisci! Exercitationem blanditiis quos ipsam nam, asperiores maiores nihil minus.',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis error eveniet explicabo, eum labore atque quos, ut fugit unde pariatur dolorem cupiditate deserunt sapiente enim sint.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsam obcaecati temporibus minus optio, aperiam debitis tempore atque! Rem nisi nulla dicta soluta necessitatibus corrupti, veniam id, quia maiores tempora quidem. In nihil eum incidunt, pariatur iure adipisci error impedit.',
];

class CandidateListPage extends React.Component {
	render() {
		return (
			<main className='candidates-page'>
				<NavigationBar />
				<div className='card-container'>
					<Card style={{ width: '500px', margin: '50px auto 50px auto', padding: '20px' }}>
						<CardBody>
							<h1 className='title'>Welcome</h1>
							<h5 className='h5'>Let's get you started to hire the best and top candidates</h5>
							<h5 className='h5'>Start by creating a new role</h5>
							<Link to='/create-new-role'>
								<Button color='warning'>Create a new Role</Button>
							</Link>
						</CardBody>
					</Card>
					<CandidateCard Name='Fahaad Kamraan' Skills='Python, ' Location='Tokyo, Japan' Description={sampleDesc[1]} />
					<CandidateCard Name='Pulkit Jasti' Skills='html, css' Location='Mumbai, India' Description={sampleDesc[0]} />
				</div>
			</main>
		);
	}
}

export default CandidateListPage;
