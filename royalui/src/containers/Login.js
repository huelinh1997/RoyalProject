import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/images/logo.svg';
import FormLogin from '../components/FormLogin';
import { connect } from 'react-redux';
import { AuthAction } from '../stores/actions';
import history from '../helpers/history';

function Login({ loginForm }) {
	const onLogInForm = (data) => {
		loginForm(data);
	};
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
								<h4>Hello! let's get started</h4>
								<h6 className='font-weight-light'>Sign in to continue.</h6>
								<FormLogin
									onLogIn={(obj) => {
										onLogInForm(obj);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* content-wrapper ends */}
			</div>
			{/* page-body-wrapper ends */}
		</div>
	);
}

Login.propTypes = {
	loginForm: PropTypes.func,
};

const mapDispatchToProps = {
	loginForm: AuthAction.LoginAction,
};

export default connect(null, mapDispatchToProps)(Login);
