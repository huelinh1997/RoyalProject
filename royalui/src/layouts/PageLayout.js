import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import VerticalNav from '../components/navbar/VerticalNav';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes/PageRoute';

function PageLayout() {
	const showContent = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index.toString()}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				);
			});
		}
		return <Switch> {result} </Switch>;
	};
	return (
		<div className='container-scroller'>
			<Header />
			<div className='container-fluid page-body-wrapper'>
				<VerticalNav />
				<div className='main-panel'>{showContent(routes)}</div>
			</div>
		</div>
	);
}

PageLayout.propTypes = {};

export default PageLayout;
