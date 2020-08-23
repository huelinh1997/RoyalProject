import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function VerticalMenuItem({ route }, props) {
	const showChildrenMenu = (childs) => {
		let result = null;
		if (childs.children > 0) {
			result = childs.map((item, index) => {
				return <VerticalMenuItem key={index} route={item} />;
			});
		}
		return result;
	};

	let location = useLocation();
	const getClassName = (path) => {
		if (location.pathname === path) {
			return 'nav-item active';
		} else return 'nav-item';
	};
	return (
		<li className={getClassName(`${route.path}`)}>
			{!route.children && (
				<Link className='nav-link' to={route.path}>
					{route.icon && <i className={`${route.icon} menu-icon`}></i>}
					<span className='menu-title'>{route.name}</span>
				</Link>
			)}
			{route.children && (
				<React.Fragment>
					<Link
						className='nav-link'
						to={route.path}
						data-toggle='collapse'
						aria-expanded='false'
						aria-controls='ui-basic'>
						<i className={`${route.icon} menu-icon`}></i>
						<span className='menu-title'>{route.name}</span>
						<i className='menu-arrow'></i>
					</Link>
					<div className='collapse' id='ui-basic'>
						<ul className='nav flex-column sub-menu'>
							{showChildrenMenu(route.children)}
						</ul>
					</div>
				</React.Fragment>
			)}
		</li>
	);
}

VerticalMenuItem.propTypes = {
	route: PropTypes.object,
};

export default VerticalMenuItem;
