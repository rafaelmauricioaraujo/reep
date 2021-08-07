import React, { Component } from "react";
import CardNote from "../CardNote/";
import './style.css';

class NoteList extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <ul className='note-list'>
        {this.props.notes.map((note, index) => {
          return (
            <li className='note-list_item' key={index}>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
