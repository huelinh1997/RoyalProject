import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FormLogin({ onLogIn }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		onLogIn({ username, password });
	};

	return (
		<form className='pt-3' onSubmit={handleSubmit}>
			<div className='form-group'>
				<input
					type='text'
					className='form-control form-control-lg'
					id='username'
					name='username'
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					placeholder='Username'
				/>
			</div>
			<div className='form-group'>
				<input
					type='password'
					className='form-control form-control-lg'
					id='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
			</div>
			<div className='mt-3'>
				<button
					className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'
					type='submit'>
					SIGN IN
				</button>
			</div>
			<div className='my-2 d-flex justify-content-between align-items-center'>
				<div className='form-check'>
					<label className='form-check-label text-muted'>
						<input
							type='checkbox'
							className='form-check-input'
							checked={remember}
							onChange={() => setRemember(!remember)}
						/>
						Keep me signed in
						<i className='input-helper'></i>
					</label>
				</div>
				<a href='#' className='auth-link text-black'>
					Forgot password?
				</a>
			</div>
			<div className='mb-2'>
				<button
					type='button'
					className='btn btn-block btn-facebook auth-form-btn'>
					<i className='fab fa-facebook-f mr-2' />
					Connect using facebook
				</button>
			</div>
			<div className='text-center mt-4 font-weight-light'>
				Don't have an account?
				<Link to='register' className='text-primary'>
					Create
				</Link>
			</div>
		</form>
	);
}

FormLogin.propTypes = {
	onLogIn: PropTypes.func,
};

export default FormLogin;
