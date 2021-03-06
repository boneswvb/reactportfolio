import React from 'react';
import './Header.css'

const Header = () => {
		return(
			<div className='header' id="portfolio">
			<img className='photo box' alt="Wim von Benecke" src="./pictures/Wim%20new.jpg" />
				<h1 className="mainHeading">Wilhelm A von Benecke. (Wim)</h1>				
				<div className='contact'>
					<h3 className='tc'>Contact me</h3>
					<p className='tc'>Cell phone: +27 (0) 71 099 2811</p>
					<p className=' tc email'><a className="email" href="mailto:info@lesawi.co.za">Email: info@lesawi.co.za</a></p>
				</div>
			</div>
		);
	}

export default Header;