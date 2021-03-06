import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from 'layouts/Admin/Admin.js';
import RTLLayout from 'layouts/RTL/RTL.js';

import 'assets/scss/black-dashboard-react.scss';
import 'assets/demo/demo.css';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';

//
import './style.scss';
//

//Login and signup components
import CandidateSignup from 'pages/CandidateSignup';
import CompanySignup from 'pages/CompanySignup';
import CandidateLogin from 'pages/CandidateLogin';
import CompanyLogin from 'pages/CompanyLogin';

//Other components
import ProfileForm from 'pages/ProfileForm';
import NavigationBar from 'pages/NavigationBar';
import SideBar from 'pages/SideBar';
import RegComplete from 'pages/RegComplete';
import JobListPage from 'pages/JobListPage';
import CandidateListPage from 'pages/CandidateListPage';
import CreateNewRole from 'pages/CreateNewRole';
import App from 'App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

// <ThemeContextWrapper>
// 	<BackgroundColorWrapper>
// 		<BrowserRouter>
// 			<Switch>
// 				<Route path='/admin' render={props => <AdminLayout {...props} />} />
// 				<Route path='/rtl' render={props => <RTLLayout {...props} />} />
// 				<Redirect from='/' to='/admin/dashboard' />
// 			</Switch>
// 		</BrowserRouter>
// 	</BackgroundColorWrapper>
// </ThemeContextWrapper>;
