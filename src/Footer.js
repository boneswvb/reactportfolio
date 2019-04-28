import React from 'react';
import './footer.css';

const Footer = () => {
	return(
		<div>
			<div className="contact" id="contact">
	      <h1>Contact details</h1>
	      <p className="contact1" id="contact1">LeSaWi Web Creation
	        <br /> 11A Mopanie Street
	        <br /> White River, 1240
	        <br /> (082)-714-5656
	        <br /> Wim von Benecke
	        <br /><a href="mailto:boneswvb@gmail.com">Email me for more details: boneswvb@gmail.com</a>
	      </p>
	    </div>
	    <div className="quickLinks" id="quickLinks">
	      <h3>Quick Links</h3>
	     	 <ul>
	        <li><a href="#SometingAboutMe">About</a></li>
	        <li><a href="#portfolio">Portfolio</a></li>
	        <li><a href="#contact">Contact Me</a></li>
	      </ul>
	    </div>
	    <div className="web" id="web">
	      <h3>Follow Me On The Web:</h3>
	     	 <ul>

	        <li>
	            <a href="https://web.facebook.com/groups/lesawi/" target="_blank"  rel="noopener noreferrer">Facebook</a>
	        </li>

	        <li>
	            <a href="https://www.linkedin.com/in/wim-von-benecke-680429135/" target="_blank"  rel="noopener noreferrer">LinkedIn</a>
	        </li>

	        <li>
	            <a href="https://codepen.io/dashboard/" target="_blank"  rel="noopener noreferrer">Codepen</a>
	        </li>

	        <li>
	            <a href="https://www.instagram.com/wimvonbenecke/" target="_blank"  rel="noopener noreferrer">Instagram</a>
	        </li>

	        <li>
	            <a href="https://github.com/boneswvb" target="_blank"  rel="noopener noreferrer">Github</a>
	        </li>
	      </ul>
	    </div>

	    <div className="footera" id="footer">
	      <p className="creator" id="creator">All Rights Reserved © W A von Benecke.</p>
	      <button className="navbutton"><a href="#portfolioName">To top</a></button>
	    </div>
    </div>
	);
}

export default Footer;