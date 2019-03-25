import React from 'react';
import MainMenu from './js/MainMenu';

const AddDropMenu = ({ DropDownMenuItems }) => {
	return (
		<div>
			{
				DropDownMenuItems.map((items, i) => {
					return(<MainMenu 
						id={items[i].id}
						name={items[i].name}
						href={items[i].href} />
						);
					})
			}
		</div>
	);
}
	export default AddDropMenu;