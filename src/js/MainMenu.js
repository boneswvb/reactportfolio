import React from 'react';

const MainMenu = ({id, name, href}) => {
	return(
		<div>
			<button className="navbutton" id="navbutton"><a href="#SometingAboutMe">About</a></button>
      <button className="navbutton" id="navbutton"><a href="#portfolio">Portfolio</a></button>
      <button className="navbutton" id="navbutton"><a href="#contact">Contact Me</a></button>
 				<div className="dropdown">
					<button className="navbutton" id="navbutton"><a href="#portfolio">Projects</a></button>
						<div className="dropdown-content">
							<a href={`${href}`}>{`${name}`}</a>
						</div>
  			</div> 
		</div>
	);
}

export default MainMenu;