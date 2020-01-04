import React, { Component } from 'react';
import Form from './Form';
import './Form.css'

class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contactNumber: "",
      country: "",
      qualityOfPortfolio: "",
      watchProgress: "",
      comments: "",
      HowDidYouHearAboutMe: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
  	return(
      <div>
      <Form data={this.state} handleChange={this.handleChange} />
      </div>
    );    
  }
}

export default ClassForm;
