import React from 'react';
import MainMenu from './js/MainMenu';

const AddDropMenu = ({ DropDownMenuItems }) => {
	return (
		<div>
			{
				DropDownMenuItems.map((links, i) => {
				return(<MainMenu
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