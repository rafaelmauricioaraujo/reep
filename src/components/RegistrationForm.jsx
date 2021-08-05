import React, { Component } from "react";

class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Title"></input>
        <textarea placeholder="Write your note..."></textarea>
        <button>Create note</button>
      </form>
    );
  }
};

export default RegistrationForm;
