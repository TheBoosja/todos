import React from 'react';
import useResources from './useResources';

const UserList = () => {
	const users = useResources('users');

	return (
		<ul>
			{users.map((u, key) => <li key={key}>{u.name}</li>)}
		</ul>
	);
};

export default UserList;
