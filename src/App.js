import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";
import Notes from "./data/Notes";
import Categories from "./data/Categories";

class App extends Component {
  constructor() {
    super();
    this.notes = new Notes();
    this.categories = new Categories();
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm
          categoryList={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        ></RegistrationForm>
        <main className="main-content">
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categoryList={this.categories}
          ></CategoryList>
          <NoteList
            deleteNote={this.notes.removeNote.bind(this.notes)}
            notes={this.notes}
          ></NoteList>
        </main>
      </section>
    );
  }
}

export default App;
