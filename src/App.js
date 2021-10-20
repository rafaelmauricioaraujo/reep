import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import UserForm from "./components/UserForm/UserForm";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import Post from "./components/Post/Post";
import Page404 from "./components/404/Page404";

import "./assets/App.css";
import "./assets/index.css";
import Notes from "./data/Notes";
import Categories from "./data/Categories";

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
      <Header />
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
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Page404 className="content" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
