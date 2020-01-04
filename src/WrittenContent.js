import React from 'react';
import './writtenContent.css';

const WrittenContent = () => {
	return (
    <div>
  		<article className="SometingAboutMe" id="about">
  			<h2 className="SometingAboutMe" id="SometingAboutMe">Something about me</h2>
          <section className="SometingAboutMeSpan" id="SometingAboutMeSpan">
            <p>Add content!!!!</p>
            <h3>
                <p>My skills include</p>
            </h3>
            <p>HTML (using Emmet), SCSS (Corporate style setup), CSS (Grid, Grid area, Flex box), Bootstrap,
                JavaScript, Express, React, PostgressQL.<br />
                I have done other introductory training like PHP, MySQL and phone app development. 
            </p>
  	      </section>          
      </article>
    </div>
	);
}

export default WrittenContent;