import React from 'react';
import './Form.css'

const Form = (props) => {
	return(
<div className="form" id="form">
  <div>
    <form className="tc contactForm" method="POST" action="http://free.allforms.mailjol.net/u/a09c6e50.php" autocomplete="on">

      <h1 className="tc">Let me know what you think.</h1>
      <h4>Leave a message if you want me to contact you.</h4>
      <h4>* = Required field</h4>

      <label>Name*:</label>
        <input 
            type="text" 
            name="name" 
            value={ props.data.name } 
            placeholder="Name and Surname" 
            onChange={ props.handleChange } 
            required  
        />
        <br />

      <label>E-mail*:</label>
        <input 
            type="email" 
            name="email" 
            value={ props.data.email } 
            placeholder="email@email.com" 
            onChange={ props.handleChange } 
            required  
        />
        <br />

      <label>Contact Number*:</label>
        <input 
          type="text" 
          name="contactNumber" 
          value={ props.data.contactNumber } 
          placeholder="+XX (0) XX XXX XXXX" 
          onChange={ props.handleChange } 
          required  
      />
        <br />

      <label>Your country of origin:</label>
        <input 
          type="text" 
          name="country" 
          value={ props.data.country }
          placeholder="South Africa" 
          onChange={ props.handleChange } 
          required 
        />
        <br /><br /><br />

      <label>What do you think of my portfolio?*:</label>
        <select
          value={ props.data.qualityOfPortfolio }
          onChange={ props.handleChange }
          name="qualityOfPortfolio" required>
            <option>--Select One--</option>
            <option value="VeryGood">Very good</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="NotGood">Not good</option>
            <option value="See comments below">See comments below</option>
      </select>
      <br /><br />
      <label>
        <input 
          type="radio" 
          name="watchProgress"
          value="yes"
          checked={ props.data.watchProgress === "yes" }
          onChange={ props.handleChange }
      />Yes I'm watching your progress.
      </label>
        <br />
      <label>
        <input 
          type="radio" 
          name="watchProgress"
          value="no"
          checked={ props.data.watchProgress === "no" }
          onChange={ props.handleChange }
      />No I'm not watching your progress.
      </label>
        <br /><br />

      <p>Comments:</p>
        <textarea 
          name="comments" 
          rows="10"   
          cols="40" 
          placeholder="Please leave your comments here." 
          onChange={ props.handleChange }
          value={ props.data.comments }
          >
        </textarea>
          <br />

      <label>How did you find this page?</label>
        <select  
          value={ props.data.HowDidYouHearAboutMe }
          onChange={ props.handleChange }
          name="HowDidYouHearAboutMe">
          <option>--Select One--</option>
          <option value="Facebook">Facebook</option>
          <option value="Word of mouth">Word of mouth</option>
          <option value="Internet">Internet</option>
          <option value="Other">Other</option>
      </select>
        <br />

      <input type="submit" class="submit" id="submit" name="submit" value="Submit" />

    </form>
  </div>
</div>
);
}

export default Form;