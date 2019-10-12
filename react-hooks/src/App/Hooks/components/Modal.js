import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div
			style={containerStyle}
			onClick={props.onClose}
		>
			<div
				style={modalStyle}
				onClick={(e) => e.stopPropagation()}
			>
				<h2 style={titleStyle}>{props.title}</h2>

				<i
					onClick={props.onClose}
					style={closeStyle}
				>
					&times;
				</i>

				{props.children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

Modal.defaultProps = {
	onClose: () => console.error('onClose method is required in Modal')
};

export default Modal;

const containerStyle = {
	backgroundColor: 'rgba(0, 0, 0, .8)',
	height: '100%',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
};

const modalStyle = {
	backgroundColor: 'white',
	left: '50%',
	padding: '5vw 6vw 6vw',
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
};

const titleStyle = {
	fontSize: '24px',
	fontWeight: 'bold',
	textTransform: 'uppercase'
};

const closeStyle = {
	alignItems: 'center',
	cursor: 'pointer',
	display: 'grid',
	fontSize: '25px',
	height: '30px',
	justifyItems: 'center',
	position: 'absolute',
	right: 25,
	top: 25,
	userSelect: 'none',
	width: '30px',
};
