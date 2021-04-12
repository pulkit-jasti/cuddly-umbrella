import React from 'react';
import JobCard from './JobCard';
import NavigationBar from './NavigationBar';

let sampleDesc = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore laudantium, molestias qui atque quaerat blanditiis,dicta corrupti omnis odio adipisci! Exercitationem blanditiis quos ipsam nam, asperiores maiores nihil minus.',
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis error eveniet explicabo, eum labore atque quos, ut fugit unde pariatur dolorem cupiditate deserunt sapiente enim sint.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsam obcaecati temporibus minus optio, aperiam debitis tempore atque! Rem nisi nulla dicta soluta necessitatibus corrupti, veniam id, quia maiores tempora quidem. In nihil eum incidunt, pariatur iure adipisci error impedit.',
];

class JobListPage extends React.Component {
	render() {
		return (
			<main className='jobs-page'>
				<NavigationBar></NavigationBar>
				<div className='card-container'>
					<JobCard CompanyName='Google' CompanyDescription={sampleDesc[0]} JobStatus='Interviewed' />
					<JobCard CompanyName='Facebook' CompanyDescription={sampleDesc[1]} JobStatus='Matched' />
					<JobCard CompanyName='Scoutt' CompanyDescription={sampleDesc[2]} JobStatus='Not Reviewed' />
				</div>
			</main>
		);
	}
}

export default JobListPage;
