import React from 'react';
import CandidateCard from './CandidateCard';
import NavigationBar from './NavigationBar';

let sampleDesc = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore laudantium, molestias qui atque quaerat blanditiis,dicta corrupti omnis odio adipisci! Exercitationem blanditiis quos ipsam nam, asperiores maiores nihil minus.',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis error eveniet explicabo, eum labore atque quos, ut fugit unde pariatur dolorem cupiditate deserunt sapiente enim sint.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsam obcaecati temporibus minus optio, aperiam debitis tempore atque! Rem nisi nulla dicta soluta necessitatibus corrupti, veniam id, quia maiores tempora quidem. In nihil eum incidunt, pariatur iure adipisci error impedit.',
];

class CandidateListPage extends React.Component {
	render() {
		return (
			<main className='candidates-page'>
				<NavigationBar></NavigationBar>
				<div className='card-container'>
					<CandidateCard Name='Fahaad Kamraan' Skills='Python, ' Location='Tokyo, Japan' Description={sampleDesc[1]} />
					<CandidateCard Name='Pulkit Jasti' Skills='html, css' Location='Mumbai, India' Description={sampleDesc[0]} />
				</div>
			</main>
		);
	}
}

export default CandidateListPage;
