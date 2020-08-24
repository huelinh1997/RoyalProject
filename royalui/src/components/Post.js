import React from 'react';
import PropTypes from 'prop-types';

function Post({ data }) {
	return (
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
	);
}

Post.propTypes = {
	data: PropTypes.func,
};

export default Post;
