import React from 'react';

const Scroll = (props) => {
	const styles = { 
		overflowY: 'scroll', 
		height: '600px', 
		border: '2px solid #0ff',
		margin: 'auto', 
		width: '85%',
		borderTopLeftRadius: '15px',
		borderBottomLeftRadius: '15px'
}

	return (
		<div style={styles}>
			{props.children}
		</div>
	);
};
export default Scroll;