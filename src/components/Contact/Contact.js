import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let { name, email, subject, message } = this.state;

    axios.post("/send", { name, email, subject, message }).then(response => {
      console.log(response);
      if (response.data === "success") {
        alert("Message Sent");
        this.resetForm();
      } else if (response.data === "fail") {
        alert("Message failed to send");
      }
    });
  };
  //changed from <button onClick={() => this.handleSubmit()}>Submit</button>
  //to <form onSubmit={this.handleSubmit} id="contact-form">
  // it was not console log response, is because the onClick the submit button will refresh the page, after refresh there is no response
  // e.preventDefault() will prevent it from auto refresh
  // onSubmit doesn't have to be arrow function if the callback function(handleSubmit here) was written in arrow function.

  render() {
    return (
      <div className="contact_container">
        <div className="page_title"> CONTACT </div>
        <p>
          Please contact us if you have any questions or suggestions. Use the
          contact form below or simply just give us a call. You can find our
          phone numbers and addresses below the contact form.
        </p>
        <div className="contact_form">
          <form onSubmit={this.handleSubmit}>
            <div className="info_row1">
              <div>
                <label>Name</label>
                <input
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  autoComplete="Name"
                  value={this.state.name}
                />
              </div>
              <div>
                <label>Email Address</label>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  autoComplete="Email"
                  value={this.state.email}
                />
              </div>
            </div>
            <div className="info_row2">
              <label>Subject</label>
              <input
                onChange={this.handleChange}
                name="subject"
                type="text"
                autoComplete="Subject"
                value={this.state.subject}
              />
            </div>
            <div className="info_row3">
              <textarea
                placeholder="Write your message here"
                onChange={this.handleChange}
                name="message"
                type="text"
                autoComplete="Message"
                value={this.state.message}
                // rows="5"
              />
            </div>
            <button>SUBMIT</button>
          </form>
        </div>
        <div className="info_address">
          <h2>Radiant Yoga Studio</h2>
          <ul>
            <li>11686 W 135th St, Overland Park, KS 66221, USA</li>
            <li>913-851-9500</li>
            {/* <li>View map & directions</li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
