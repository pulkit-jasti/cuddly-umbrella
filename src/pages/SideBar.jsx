import React from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import Sidebar from '../components/Sidebar/Sidebar';
import routes from 'routes.js';
import logo from 'assets/img/react-logo.png';

const SideBar = () => {
	const [sidebarOpened, setsidebarOpened] = React.useState(document.documentElement.className.indexOf('nav-open') !== -1);
	const toggleSidebar = () => {
		document.documentElement.classList.toggle('nav-open');
		setsidebarOpened(!sidebarOpened);
	};
	return (
		<div>
			<Sidebar
				routes={routes}
				logo={{
					outterLink: 'https://www.creative-tim.com/',
					text: 'Creative Tim',
					imgSrc: logo,
				}}
				toggleSidebar={toggleSidebar}
			/>
		</div>
	);
};

export default SideBar;
