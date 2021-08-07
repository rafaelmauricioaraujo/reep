import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm
          createNote={this.createNote.bind(this)}
        ></RegistrationForm>
        <NoteList notes={this.state.notes}></NoteList>
      </section>
    );
  }
}

export default App;
