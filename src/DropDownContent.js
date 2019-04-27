import React from 'react';
import './DropDownContent.css';

const DropDownContent = ({ id, name, href }) => {
	return(
		<div>
			<button>
				<a 
				className='DropDownContent'
				href={`${ href }`}>
				{`${ name }`}
				</a>
			</button>
		</div>
	);
}

export default DropDownContent;