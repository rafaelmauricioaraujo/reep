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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { validEmail, validUserName, validPassword } from "./models/cadastro";
function App() {
  // constructor() {
  //   super();
  //   this.notes = new Notes();
  //   this.categories = new Categories();
  // }

  const notes = new Notes();
  const categories = new Categories();

  function onSubmit(dados) {
    console.log(dados);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
                <UserForm onSubmit={onSubmit} />
              </RegisterValidations.Provider>
            </Container>
          </section>
        </Route>
        <Route path="/reep">
          <section className="content">
            <Container maxWidth="sm">
              <Typography variant="h3" component="h1">
                Create Note
              </Typography>
              <RegistrationForm
                categoryList={categories}
                createNote={notes.addNote.bind(notes)}
              ></RegistrationForm>
            </Container>
            <Container maxWidth="lg">
              <main className="main-content">
                <Typography variant="h3" component="h1">
                  Note List
                </Typography>
                <CategoryList
                  addCategory={categories.addCategory.bind(categories)}
                  categoryList={categories}
                ></CategoryList>
                <NoteList
                  deleteNote={notes.removeNote.bind(notes)}
                  notes={notes}
                ></NoteList>
              </main>
            </Container>
          </section>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
