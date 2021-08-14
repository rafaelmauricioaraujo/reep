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
          categoryList={this.categories.categoryList}
          createNote={this.notes.addNote}
        ></RegistrationForm>
        <main className="main-content">
          <CategoryList
            addCategory={this.categories.addCategory}
            categoryList={this.categories.categoryList}
          ></CategoryList>
          <NoteList
            deleteNote={this.notes.removeNote}
            notes={this.notes.noteList}
          ></NoteList>
        </main>
      </section>
    );
  }
}

export default App;
