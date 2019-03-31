import React from 'react';


const MainMenu = ({ DropDownContent }) => {
	return(
			 <div class="TopNavigation" id="TopNavigation">
    
        <button class="navbutton" id="navbutton"><a href="#SometingAboutMe">About</a></button>
        <button class="navbutton" id="navbutton"><a href="#portfolio">Portfolio</a></button>
        <button class="navbutton" id="navbutton"><a href="#contact">Contact Me</a></button>
        <div class="dropdown">
          <button class="navbutton" id="navbutton"><a href="#portfolio">Projects</a></button>
            <div class="dropdown-content">
            	{`${ DropDownContent }`}
        		</div>  
          </div>  
   </div>     
		);
}

export default MainMenu;