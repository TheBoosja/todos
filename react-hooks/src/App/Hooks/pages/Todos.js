import React, { useState } from 'react';
import Modal from '../components/Modal';

export default props => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div style={containerStyles}>
			<button onClick={() => setShowModal(true)}>Open Modal</button>
			{showModal && (
				<Modal title='Confirm deletion' onClose={() => setShowModal(false)}>
					Content
				</Modal>
			)}
		</div>
	);
};

const containerStyles = {
	padding: 40,
	backgroundColor: 'rgba(0, 0, 0, .1)',
	// height: '90%'
};
