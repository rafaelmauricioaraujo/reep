import React, { Component } from "react";
import CardNote from "./CardNote";

class NoteList extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNote />
        </li>
        <li>
          <CardNote />
        </li>
        <li>
          <CardNote />
        </li>
      </ul>
    );
  }
};

export default NoteList;
