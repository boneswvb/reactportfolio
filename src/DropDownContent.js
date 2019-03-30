import React from 'react';

const DropDownContent = ({ id, name, href }) => {
	return(
					<a id={`pj${id}`} href={`${ href }`}>{`${ name }`}</a>
	);
}

export default DropDownContent;