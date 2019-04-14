import React from 'react';
import DropDownContent from './DropDownContent';

const AddDropMenu = ({ DropDownMenuItems }) => {
	return (
		<div>
			{
				DropDownMenuItems.map((items, i) => {
					return(<DropDownContent 
						key={i}
						id={DropDownMenuItems[i].id}
						name={DropDownMenuItems[i].name}
						href={DropDownMenuItems[i].href} />
					);
				})
			}
		</div>
	);
}
	export default AddDropMenu;