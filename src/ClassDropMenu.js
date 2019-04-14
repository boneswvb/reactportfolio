import React, { Component } from 'react';
import AddDropMenu from './AddDropMenu';
import DropDownMenuItems from './DropDownMenuItems';
import './ClassDropMenu.css'


class ClassDropMenu extends Component {
	
	render() {
		return(
			<div  className='dropdown'>
				<button>Projects</button>
					<div className='dropdown-content'>
						<AddDropMenu DropDownMenuItems={ DropDownMenuItems } />
					</div>
				</div>
		);
	}
}

export default ClassDropMenu;