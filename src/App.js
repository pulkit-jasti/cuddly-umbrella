import CandidateListPage from 'pages/CandidateListPage';
import CandidateLogin from 'pages/CandidateLogin';
import CandidateSignup from 'pages/CandidateSignup';
import CompanyLogin from 'pages/CompanyLogin';
import CompanySignup from 'pages/CompanySignup';
import CreateNewRole from 'pages/CreateNewRole';
import Home from 'pages/Home';
import JobListPage from 'pages/JobListPage';
import ProfileForm from 'pages/ProfileForm';
import RegComplete from 'pages/RegComplete';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/candidate-login' component={CandidateLogin}></Route>
				<Route path='/company-login' component={CompanyLogin}></Route>
				<Route path='/candidate-signup' component={CandidateSignup}></Route>
				<Route path='/company-signup' component={CompanySignup}></Route>
				<Route path='/complete-profile' component={ProfileForm}></Route>
				<Route path='/registration-completed' component={RegComplete}></Route>
				<Route path='/job-list' component={JobListPage}></Route>
				<Route path='/candidates-list' component={CandidateListPage}></Route>
				<Route path='/create-new-role' component={CreateNewRole}></Route>
			</Switch>
		</div>
	);
};

export default App;
