import React from 'react';
import './Form.css'

const Form = () => {
	return(
		<div className="form" id="form">
      <div className='form1'>
        <form nameName="contactForm" method="POST" action="http://free.allforms.mailjol.net/u/a09c6e50.php" autocomplete="on">

          <h1 className="tc" id="serviceCall">Let me know what you think.</h1>


          <h2 className="formh2">Leave a message if you want me to contact you.</h2>

          <h4 className="formh4">* = Required field</h4>

            <ol>
              <li><label for="name">Name*:</label>
                <input type="text" name="name" placeholder="First Name And Surname" id="name" required /></li>

              <li><label for="email">E-mail*:</label>
                <input type="text" name="email" placeholder="Example@example.co.za" id="email" required /></li>

              <li><label for="contactNumber">Contact Number*:</label>
                <input type="text" name="Contact Number" placeholder="Cell Phone is Prefered" id="contactNumber" required /></li>

              <li><label for="country">Your country of origin:</label>
                <input type="text" name="country" placeholder="South Africa / Mpumalanga " id="country" /></li>

                <br /><br />

              <li><label for="SructuralFeedback">What do you think of my portfolio?*:</label>
                <select name="Select feedback" required>
			            <option value="Very good" selected>Very good</option>
			            <option value="Good">Good</option>
			            <option value="Average">Average</option>
			            <option value="Not good">Not good</option>
			            <option value="See comments below">See comments below</option>
    						 </select></li>

              	  <br />
                
              <li><label for="watchProgressYes">I'm watching your progress Yes:</label>
                <input type="radio" name="watchProgressYes" id="watchProgressYes" /></li>
              <li><label for="watchingProgressNo">I'm watching your progress No:</label>
                <input type="radio" name="watchingProgressNo" id="watchingProgressNo" /></li>
              <br />
              <li><label for="comment">Comment*:</label>
                <textarea name="comment" rows="10" cols="40" placeholder="Please leave your comments here." id="comment" required></textarea></li>

              <li><label for="hearAboutUs">How did you find this page?</label>
                <select name="How did you hear about us" id="hearAboutUs" required>
						      <option value="Facebook">Facebook</option>
						      <option value="Word of mouth">Word of mouth</option>
						      <option value="Internet">Internet</option>
						      <option value="Other">Other</option>
			   			 </select></li>

              <li><input type="submit" class="submit" id="submit" name="submit" value="Submit" /></li>
            </ol>
        </form>
      </div>
    </div>
	);
}

export default Form;

