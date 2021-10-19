import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";
import Notes from "./data/Notes";
import Categories from "./data/Categories";
import UserForm from "./components/UserForm/UserForm";

import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";

import RegisterValidations from "./contexts/RegisterValidations";

import { validEmail, validUserName, validPassword } from "./models/cadastro";
class App extends Component {
  constructor() {
    super();
    this.notes = new Notes();
    this.categories = new Categories();
  }

  onSubmit(dados) {
    console.log(dados);
  }

  render() {
    return (
      <section className="content">
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1">
            User Form
          </Typography>
          <RegisterValidations.Provider
            value={{
              email: validEmail,
              name: validUserName,
              password: validPassword,
            }}
          >
            <UserForm onSubmit={this.onSubmit.bind(this)} />
          </RegisterValidations.Provider>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1">
            Create Note
          </Typography>
          <RegistrationForm
            categoryList={this.categories}
            createNote={this.notes.addNote.bind(this.notes)}
          ></RegistrationForm>
        </Container>
        <Container maxWidth="lg">
          <main className="main-content">
            <Typography variant="h3" component="h1">
              Note List
            </Typography>
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
