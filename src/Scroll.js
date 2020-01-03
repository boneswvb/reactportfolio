import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', height: '800px', border: '2px solid #0ff', margin: 'auto', width: '81%'}}>
			{props.children}
		</div>
	);
};
export default Scroll;