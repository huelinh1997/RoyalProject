import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../stores/actions';
import ReactPaginate from 'react-paginate';
import { getUserService } from '../services/userService';

function UserPage({}) {
	const [record, setRecord] = useState('5');
	const [activePage, setActivePage] = useState(1);
	const [listUser, setListUser] = useState([]);
	const [data, setData] = useState([]);
	useEffect(() => {
		getListUser();
	}, []);

	useEffect(() => {
		const newData = getData(listUser);
		setData(newData);
	}, [record, activePage]);

	const getListUser = async () => {
		const listUser = await getUserService();
		if (listUser && listUser !== undefined && listUser.status === 200) {
			setListUser(listUser.data);
			setData(getData(listUser.data));
		}
	};

	const getData = (arr) => {
		if (arr.length > 0) {
			return arr.slice(
				(activePage - 1) * record,
				(activePage - 1) * record + record
			);
		} else return [];
	};

	const handleChangeSelect = (e) => {
		setRecord(e.target.value);
		setActivePage(1);
	};

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
							<div className='table-responsive'>
								<table className='table table-striped'>
									<thead>
										<tr>
											<th>User</th>
											<th>First name</th>
											<th>Email</th>
											<th>Phone</th>
										</tr>
									</thead>
									<tbody>
										{data.map((item, index) => {
											return (
												<tr key={index}>
													<td className='py-1'>
														<img src={item.avatar} alt='image' />
													</td>
													<td>{item.name}</td>
													<td>{item.email}</td>
													<td>{item.phone}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
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
		list: state.userReducer.listUser,
	};
};

const mapDispatchToProps = {
	getListUser: userAction.getUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
