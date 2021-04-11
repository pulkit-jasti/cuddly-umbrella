import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/scss/black-dashboard-react.scss';
import 'assets/demo/demo.css';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Signup from './pages/signup/Signup';
import ProfileForm from 'pages/profileForm/ProfileForm';

ReactDOM.render(<ProfileForm />, document.getElementById('root'));

{
	/* <BackgroundColorWrapper>
					<BrowserRouter>
						<Switch>
							<Route path='/admin' render={props => <AdminLayout {...props} />} />
							<Route path='/rtl' render={props => <RTLLayout {...props} />} />
							<Redirect from='/' to='/admin/dashboard' />
						</Switch>
					</BrowserRouter>
				</BackgroundColorWrapper> */
}
