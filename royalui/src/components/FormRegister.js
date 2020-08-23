import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Error, Success } from '../helpers/notify/index';

function FormRegister({ onRegister }) {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		country: '',
		password: '',
		agree: false,
	});

	const [status, setStatus] = useState({
		username: false,
		email: false,
		country: false,
		password: false,
	});

	const handleSubmitForm = (e) => {
		e.preventDefault();
		handleError();
		if (
			status.username === false &&
			status.email === false &&
			status.country === false &&
			status.password === false
		) {
			if (formState.agree === false) {
				Error('You must agree to the terms and conditions!');
			} else {
				delete formState.agree;
				onRegister(formState);
			}
		}
	};

	const handleChangeInput = (e) => {
		setFormState({
			...formState,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
		});
	};

	const handleError = () => {
		if (formState.username === '') {
			setStatus((status) => ({ ...status, username: true }));
		} else {
			setStatus((status) => ({ ...status, username: false }));
		}

		if (formState.email === '') {
			setStatus((status) => ({ ...status, email: true }));
		} else {
			setStatus((status) => ({ ...status, email: false }));
		}

		if (formState.country === '') {
			setStatus((status) => ({ ...status, country: true }));
		} else {
			setStatus((status) => ({ ...status, country: false }));
		}

		if (formState.password === '') {
			setStatus((status) => ({ ...status, password: true }));
		} else {
			setStatus((status) => ({ ...status, password: false }));
		}
	};
	return (
		<form className='pt-3' onSubmit={handleSubmitForm}>
			<div className='form-group'>
				<input
					type='text'
					className=''
					className={`form-control form-control-lg`}
					id='username'
					name='username'
					value={formState.username !== undefined ? formState.username : ''}
					onChange={handleChangeInput}
					placeholder='Username'
				/>

				{formState.username === '' && status.username && (
					<span className='required'>Field required</span>
				)}
			</div>
			<div className='form-group'>
				<input
					type='email'
					className={`form-control form-control-lg`}
					id='email'
					name='email'
					value={formState.email !== undefined ? formState.email : ''}
					onChange={handleChangeInput}
					placeholder='Email'
				/>
				{formState.email === '' && status.email && (
					<span className='required'>Field required</span>
				)}
			</div>
			<div className='form-group'>
				<select
					className={`form-control form-control-lg`}
					id='country'
					name='country'
					onChange={handleChangeInput}
					value={formState.country !== undefined ? formState.country : ''}>
					<option value=''>Country</option>
					<option value='United States of America'>
						United States of America
					</option>
					<option value='United Kingdom'>United Kingdom</option>
					<option value='India'>India</option>
					<option value='Germany'>Germany</option>
					<option value='Argentina'>Argentina</option>
				</select>
				{formState.country === '' && status.country && (
					<span className='required'>Field required</span>
				)}
			</div>
			<div className='form-group'>
				<input
					type='password'
					className='form-control form-control-lg'
					id='password'
					name='password'
					value={formState.password !== undefined ? formState.password : ''}
					onChange={handleChangeInput}
					placeholder='Password'
				/>
				{formState.password === '' && status.password && (
					<span className='required'>Field required</span>
				)}
			</div>
			<div className='mb-4'>
				<div className='form-check'>
					<label className='form-check-label text-muted'>
						<input
							type='checkbox'
							name='agree'
							checked={formState.agree !== undefined ? formState.agree : false}
							onChange={handleChangeInput}
							className='form-check-input'
						/>
						I agree to all Terms &amp; Conditions
						<i className='input-helper'></i>
					</label>
				</div>
			</div>
			<div className='mt-3'>
				<button
					type='submit'
					onClick={handleError}
					className='btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn'>
					SIGN UP
				</button>
			</div>
			<div className='text-center mt-4 font-weight-light'>
				Already have an account?
				<Link to='login' className='text-primary'>
					Login
				</Link>
			</div>
		</form>
	);
}

FormRegister.propTypes = {
	onRegister: PropTypes.func,
};

export default FormRegister;
