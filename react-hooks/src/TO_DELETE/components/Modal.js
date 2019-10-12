import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div onClick={() => console.log('close modal')} style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100vh',
			backgroundColor: 'rgba(0, 0, 0, .8)'
		}}>
			<div onClick={e => e.stopPropagation()} style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '50%',
				height: '50%',
				display: 'grid',
				alignItems: 'center',
				justifyItems: 'center',
				backgroundColor: 'white'
			}}>
				klsdfhjgkl;afhdgl lksjhgkl;d jsdklgf jklds
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
