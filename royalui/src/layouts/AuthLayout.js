import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';

function AuthLayout({ match: { url } }) {
	return (
		<Switch>
			<Route path={`${url}/login`} exact component={Login} />
			<Route path={`${url}/register`} exact component={Register} />
			<Redirect to='/errors' />
		</Switch>
	);
}

AuthLayout.propTypes = {};

export default withRouter(AuthLayout);
