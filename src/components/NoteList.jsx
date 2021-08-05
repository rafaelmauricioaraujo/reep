import React, { Component } from "react";
import CardNote from "./CardNote/CardNote";

class NoteList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Work", "Work", "Study").map((category, index) => {
          return (
            <li key={index}>            
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
