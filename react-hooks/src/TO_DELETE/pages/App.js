import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Modal from '../components/Modal';

const App = () => {
	const [ resource, setResource ] = useState('posts');

	return (
		<div>
			<div>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			<UserList />
			<ResourceList resource={resource} />
			<UserForm />
			<Modal />
		</div>
	);
}

export default App;
