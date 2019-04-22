import React from 'react';
import ClassDropMenu from './ClassDropMenu';

const Menu = () => {
	return(
		<div className='menuOne'>
						<button className="aboutMe">About me</button>
						<button className="certificates">Cerificates</button>
						<button className="contactMe">Contact Me</button>
						<ClassDropMenu />
					</div>
	);
}

export default Menu;