import React from 'react';

const DropDownContent = ({ id, name, href }) => {
	return(
					<a id={`${id}`} href={`${ href }`}>{`${ name }`}</a>
	);
}

export default DropDownContent;