import React from 'react';
import Homepage from '../containers/Homepage';
import Buttons from '../containers/Buttons';
import Typography from '../containers/Typography';
import FormElement from '../containers/FormElement';
import Chart from '../containers/Charts';
import Tables from '../containers/Tables';
import Icon from '../containers/Icons';
import UserPage from '../containers/UserPage';
import Documentation from '../containers/Documentation';

const routes = [
	{
		path: '/',
		exact: true,
		name: 'Dashboard',
		icon: 'ti-shield',
		main: () => <Homepage />,
	},

	{
		path: '/forms',
		name: 'Form Elements',
		icon: 'ti-layout-list-post',
		main: () => <FormElement />,
	},
	{
		path: '/charts',
		name: 'Charts',
		icon: 'ti-pie-chart',
		main: () => <Chart />,
	},
	{
		path: '/table',
		name: 'Table',
		icon: 'ti-view-list-alt',
		main: () => <Tables />,
	},
	{
		path: '/icons',
		name: 'Icons',
		icon: 'ti-star',
		main: () => <Icon />,
	},
	{
		path: '/users',
		name: 'User Page',
		icon: 'ti-user',
		main: () => <UserPage />,
	},
	{
		path: '/documentation',
		name: 'Documentation',
		icon: 'ti-write',
		main: () => <Documentation />,
	},
];

export default routes;
