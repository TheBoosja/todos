import React, { useState } from 'react';

const useUserState = () => {
	const [ state, setState ] = useState({});

	const setUserState = e => {
		const { name, value } = e.target;

		setState({
			[name]: value
		});
		console.log(name, value);
	}

	return [ state, setUserState ];
}

const UserForm = () => {
	const [ state, setState ] = useUserState();

	return (
		<form>
			<input value={state.name} onChange={setState} />
			<input value={state.address} onChange={setState} />
			<input value={state.email} onChange={setState} />
			<input value={state.phone} onChange={setState} />
		</form>
	);
};

export default UserForm;
