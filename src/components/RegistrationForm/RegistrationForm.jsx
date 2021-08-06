import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {

  constructor() {
    super();
    this.title = '';
  }

  handlerChangeTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  render() {
    return (
      <form className="registration-form">
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
          onChange={this.handlerChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          className="registration-form_"
          placeholder="Write your note..."
          className="registration-form_input"
        />
        <button className="registration-form_input registration-form_submit">
          Create note
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
