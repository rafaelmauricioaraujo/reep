import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";
import Notes from "./data/Notes";
import Categories from "./data/Categories";
import UserForm from "./components/UserForm/UserForm";

import Container from "@material-ui/core/Container";

class App extends Component {
  constructor() {
    super();
    this.notes = new Notes();
    this.categories = new Categories();
  }

  render() {
    return (
        <section className="content">
          <Container maxWidth="sm">
            <h1>User Form</h1>
            <UserForm />
          </Container>
          <Container maxWidth="sm">
            <RegistrationForm
              categoryList={this.categories}
              createNote={this.notes.addNote.bind(this.notes)}
            ></RegistrationForm>
          </Container>
          <Container maxWidth="lg">
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
          </Container>
        </section>
    );
  }
}

export default App;
