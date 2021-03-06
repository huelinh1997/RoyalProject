import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PropTye = {
	component: PropTypes.func,
	location: PropTypes.object,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
	//
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem('logged') === 'true' ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/authentication/login' }} />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = PropTye;

export default PrivateRoute;
