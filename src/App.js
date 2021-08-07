import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  createNote(title, text) {
    console.log(`new card created ${title}, ${text}`);
  }
  render() {
    return (
      <section className="content">
        <RegistrationForm createNote={this.createNote}></RegistrationForm>
        <NoteList></NoteList>
      </section>
    );
  }
}

export default App;
