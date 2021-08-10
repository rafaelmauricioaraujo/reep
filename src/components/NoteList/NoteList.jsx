import React, { Component } from "react";
import CardNote from "../CardNote/";
import "./style.css";

class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="note-list_item" key={index}>
              <CardNote
                id={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                text={note.text}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
