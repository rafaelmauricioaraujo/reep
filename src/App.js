import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegistrationForm from "./components/RegistrationForm";
import CategoryList from "./components/CategoryList/CategoryList";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categoryList: [],
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

  removeNote(index) {
    let noteList = this.state.notes;
    noteList.splice(index, 1);
    const newState = {
      notes: noteList,
    };
    this.setState(newState);
  }

  addCategory(value){
    const categoryList = this.state.categoryList;
    const newCategoryList = [...categoryList, value];
    const newState = {...this.state, categoryList:newCategoryList};
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm
          createNote={this.createNote.bind(this)}
          categoryList={this.state.categoryList}
        ></RegistrationForm>
        <main className="main-content">
          <CategoryList
            addCategory={this.addCategory.bind(this)}
            categoryList={this.state.categoryList}
          ></CategoryList>
          <NoteList
            deleteNote={this.removeNote.bind(this)}
            notes={this.state.notes}
          ></NoteList>
        </main>
      </section>
    );
  }
}

export default App;
