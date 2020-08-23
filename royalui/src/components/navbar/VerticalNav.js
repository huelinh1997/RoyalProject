import React from 'react';
import PropTypes from 'prop-types';
import routes from '../../routes/PageRoute';

import VerticalMenuItem from '../../components/navbar/VerticalMenuItem';

function VerticalNav(props) {
	const showMainVerticalMenu = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return <VerticalMenuItem route={route} key={index} />;
			});
		}
		return result;
	};
	return (
		<nav className='sidebar sidebar-offcanvas' id='sidebar'>
			<ul className='nav'>{showMainVerticalMenu(routes)}</ul>
		</nav>
	);
}

VerticalNav.propTypes = {};

export default VerticalNav;
