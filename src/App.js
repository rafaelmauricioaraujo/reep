import React, { Component } from "react";
import NoteList from "./components/NoteList.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
class App extends Component {
  render() {
    return (
      <section>
        <RegistrationForm></RegistrationForm>
        <NoteList></NoteList>
      </section>
    );
  };
};

export default App;
