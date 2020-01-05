import React from 'react';
import ClassDropMenu from './ClassDropMenu';

const Menu = () => {
	return(
		<div className='menuOne'>
						<button className="aboutMe"><a href="#about">About me</a></button>
						<button className="contactMe"><a href="#contact">Contact Me</a></button>
						<ClassDropMenu />
					</div>
	);
}

export default Menu;