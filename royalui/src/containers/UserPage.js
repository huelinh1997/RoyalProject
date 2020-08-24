import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../stores/actions';
import ReactPaginate from 'react-paginate';
import { getUserService } from '../services/userService';
import Post from '../components/Post';

function UserPage({ getListUser, listUser }) {
	const [record, setRecord] = useState('5');
	const [activePage, setActivePage] = useState(1);
	useEffect(() => {
		getListUser();
	}, []);

	const getData = (arr) => {
		if (arr.length > 0) {
			return arr.slice(
				(activePage - 1) * record,
				(activePage - 1) * record + record
			);
		} else return [];
	};

	const data = getData(listUser);

	const handleChangeSelect = (e) => {
		setActivePage(1);
		setRecord(e.target.value);
	};
	console.log('activePage:', activePage);

	const size = Math.ceil(listUser.length / record);

	return (
		<div className='content-wrapper'>
			<div className='row'>
				<div className='col-lg-12 grid-margin stretch-card'>
					<div className='card'>
						<div className='card-body'>
							<h4 className='card-title'>List user page:</h4>
							<select
								name='record'
								className='form-select'
								onChange={handleChangeSelect}
								style={{ width: '80px' }}
								value={record}>
								<option value='5'>5</option>
								<option value='10'>10</option>
							</select>
							<Post data={data} />
							<ReactPaginate
								pageCount={size}
								previousLabel={'<<'}
								nextLabel={'>>'}
								marginPagesDisplayed={1}
								pageRangeDisplayed={1}
								nextLinkClassName={'page-link'}
								previousLinkClassName={'page-link'}
								pageClassName={'page-item'}
								pageLinkClassName={'page-link'}
								breakClassName={'page-link'}
								activeClassName={'active'}
								activeLinkClassName={'active'}
								breakLinkClassName={'page-item'}
								containerClassName={'pagination'}
								forcePage={activePage - 1}
								onPageChange={(data) => {
									setActivePage(data.selected + 1);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

UserPage.propTypes = {};

UserPage.defaultProps = {};

const mapStateToProps = (state) => {
	return {
		listUser: state.userReducer.listUser,
	};
};

const mapDispatchToProps = {
	getListUser: userAction.getUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
