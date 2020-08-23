import React from 'react';
import PropTypes from 'prop-types';
import FormRegister from '../components/FormRegister';
import Logo from '../assets/images/logo.svg';
import { connect } from 'react-redux';
import { AuthAction } from '../stores/actions';

function Register({ onRegisterUser }) {
	const onRegister = (data) => {
		onRegisterUser(data);
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
								<h4>New here?</h4>
								<h6 className='font-weight-light'>
									Signing up is easy. It only takes a few steps
								</h6>
								<FormRegister
									onRegister={(user) => {
										onRegister(user);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Register.propTypes = {
	onRegisterUser: PropTypes.func,
};

const mapDispatchToProps = {
	onRegisterUser: AuthAction.registerAction,
};

export default connect(null, mapDispatchToProps)(Register);
