import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handlerChangeTitle(event) {
    this.title = event.target.value;
  }

  _handlerChangeText(event) {
    this.text = event.target.value;
  }

  createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="registration-form"
        onSubmit={this.createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
          onChange={this._handlerChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          className="registration-form_"
          placeholder="Write your note..."
          className="registration-form_input"
          onChange={this._handlerChangeText.bind(this)}
        />
        <button className="registration-form_input registration-form_submit">
          Create note
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
