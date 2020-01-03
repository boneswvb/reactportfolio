import React from 'react';
import './writtenContent.css';

const WrittenContent = () => {
	return (
    <div>
  		<article className="SometingAboutMe">
  			<h2 className="SometingAboutMe" id="SometingAboutMe">Something about me</h2>
          <section className="SometingAboutMeSpan" id="SometingAboutMeSpan">
            <p>Passion is the only thing that can drive a man to stand up every morning at 03h00 to learn a new skill. 
                I started in December 2017 with learning static web development as a hobby but by August 2018 it was much more than that.</p>
            <p>My skills have grown from HTML and CSS to a point where I can call myself an intermediate web developer</p>
            <p>All my training that I have done and still doing is from free training that I can get of the WEB as I cannot afford to study full time,
              	or pay for distant training. I have to do all my training before and after work.</p>
            <p>The training certificates I treasure most is most probably the ones I received from FreeCodeCamp</p>
            <h4>
                <p>They include: "Front End Development", "Responsive Web Design" and "JavaScript Algorithms and Data structures"</p>
            </h4>
            <h3>
                <p>My skills now include</p>
            </h3>
            <p>HTML (using Emmet), SCSS (Corporate style setup), CSS (Grid, Grid area, Flex box), Bootstrap,
                JavaScript, Express, React, PostgressQL.
                I have done other introductory training like PHP, MySQL and phone app development. 
            </p>
            <p>By clicking on the link below you will be able to see the certificates that I have received.</p>
  	      </section>
          <section className="training">
              <h2 className="training1" id="training1">Certificates of completed training</h2>
          </section>          
      </article>
    </div>
	);
}

export default WrittenContent;