import React from 'react';


const MainMenu = ({ DropDownContent }) => {
	return(
			 <div className="TopNavigation" id="TopNavigation">
    
        <button className="navbutton" id="navbutton"><a href="#SometingAboutMe">About</a></button>
        <button className="navbutton" id="navbutton"><a href="#portfolio">Portfolio</a></button>
        <button className="navbutton" id="navbutton"><a href="#contact">Contact Me</a></button>
        <div className="dropdown">
          <button className="navbutton" id="navbutton"><a href="#portfolio">Projects</a></button>
            <div className="dropdown-content">
            	{`dropdown display here =>>>${ DropDownContent }`}
        		</div>  
          </div>  
   </div>     
		);
}

export default MainMenu;