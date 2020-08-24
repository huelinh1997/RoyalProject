import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Errors(props) {
	return (
		<div className='container-scroller'>
			<div className='container-fluid page-body-wrapper full-page-wrapper'>
				<div className='content-wrapper d-flex align-items-center auth px-0'>
					<div className='row w-100 mx-0'>
						<div className='col-lg-4 mx-auto'>
							<div className='auth-form-light text-left py-5 px-4 px-sm-5'>
								<div className='brand-logo'>
									<img src={Logo} alt='logo' />
								</div>
								<div className='p-5 card-body'>
									<div className='display-1 text-200 fs-error'>404</div>
									<p className='lead mt-4 text-800 text-sans-serif font-weight-semi-bold'>
										The page you're looking for is not found.
									</p>
									<hr />
									<p>
										Make sure the address is correct and that the page hasn't
										moved. If you think this is a mistake,
										<a href='mailto:info@exmaple.com' className='ml-1'>
											contact us
										</a>
										.
									</p>
									<Link className='btn btn-primary btn-sm mt-3' to='/'>
										Take me home
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Errors.propTypes = {};

export default Errors;
