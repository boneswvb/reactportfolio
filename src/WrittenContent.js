import React from 'react';
import './writtenContent.css';

const WrittenContent = () => {
	return (
    <div>
  		<article className="SometingAboutMe" id="about">
  			<h2 className="SometingAboutMe" id="SometingAboutMe">Something about me</h2>
          <section className="SometingAboutMeSpan" id="SometingAboutMeSpan">
           <h4>This portfolio was created with React.</h4>
            <p>For the last two years I have done various training as listed below. The idea was to create a web site 
              for myself to do Evangelistic work. Currently I have started advance training on React as I have changed 
              my short term goals. I will be looking to make a career change in the next couple of months after 
              completing the training. Over the next 15 years I'm looking to gain as much as posible experience and 
              become a full stack developer</p>
            <p>The idea is to gain experience in the real world that I can use to create the best possible web app for 
              the end user. To view the code you can have a look at my git repositry - 
              <a href="https://github.com/boneswvb/reactportfolio" target="blank">https://github.com/boneswvb/reactportfolio</a></p>
            <h3>My skills include</h3>
            <p>HTML (using Emmet), SCSS (Corporate style setup), CSS (Grid, Grid area, Flex box), Bootstrap,
                JavaScript, React.<br />
                I have done other introductory training like Express, PostgressQL, PHP, MySQL and phone app deployment.

            </p>
  	      </section>          
      </article>
    </div>
	);
}

export default WrittenContent;