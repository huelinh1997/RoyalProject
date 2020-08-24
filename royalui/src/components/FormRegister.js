import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Error, Success } from '../helpers/notify/index';
import { useForm } from 'react-hook-form';

function FormRegister({ onRegister }) {
	const [formState, setFormState] = useState({
		agree: false,
		country: '',
	});
	const { register, errors, handleSubmit } = useForm();

	const [status, setStatus] = useState({
		country: false,
	});

	const handleSubmitForm = (e) => {
		if (status.country === false) {
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
		if (formState.country === '') {
			setStatus((status) => ({ ...status, country: true }));
		} else {
			setStatus((status) => ({ ...status, country: false }));
		}
	};
	return (
		<form className='pt-3' onSubmit={handleSubmit(handleSubmitForm)}>
			<div className='form-group'>
				<input
					type='text'
					className=''
					className={`form-control form-control-lg`}
					id='username'
					name='username'
					ref={register({
						required: true,
					})}
					value={formState.username !== undefined ? formState.username : ''}
					onChange={handleChangeInput}
					placeholder='Username'
				/>

				{errors.username && <span className='required'>Field required</span>}
			</div>
			<div className='form-group'>
				<input
					type='email'
					className={`form-control form-control-lg`}
					id='email'
					name='email'
					value={formState.email !== undefined ? formState.email : ''}
					onChange={handleChangeInput}
					ref={register({
						required: true,
					})}
					placeholder='Email'
				/>
				{errors.email && <span className='required'>Field required</span>}
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
					ref={register({
						required: true,
					})}
					placeholder='Password'
				/>
				{errors.password && <span className='required'>Field required</span>}
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
