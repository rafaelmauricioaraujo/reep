import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  
  constructor() {
    super();
    this.notes = [];
  }
  
  createNote(title, text) {
    const newNote = {title, text};
    this.notes.push(newNote);
    console.log('notes:  ', this.notes);
  }
  
  render() {
    return (
      <section className="content">
        <RegistrationForm createNote={this.createNote.bind(this)}></RegistrationForm>
        <NoteList notes={this.notes}></NoteList>
      </section>
    );
  }
}

export default App;
