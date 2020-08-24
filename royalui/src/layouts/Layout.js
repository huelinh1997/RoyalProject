import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../helpers/history';
import AuthLayout from './AuthLayout';
import PageLayout from './PageLayout';
import PrivateRoute from '../routes/PrivateRoute';
import Errors from '../containers/Errors';
const Layout = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/authentication/' component={AuthLayout} />
				<Route path='/errors/' component={Errors} />
				<PrivateRoute component={PageLayout} />
			</Switch>
		</Router>
	);
};

export default Layout;
