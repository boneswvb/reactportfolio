import React from 'react';

const Scroll = (props) => {
	const styles = { 
		overflowY: 'scroll', 
		height: '650px', 
		border: '2px solid #0ff',
		margin: 'auto', 
		width: '81%'
}

	return (
		<div style={styles}>
			{props.children}
		</div>
	);
};
export default Scroll;