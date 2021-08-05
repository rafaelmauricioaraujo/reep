import React, { Component } from "react";
import './style.css';

class CardNote extends Component {
  render() {
    return (
      <section className='card-note'>
        <header>
          <h3>Title</h3>
        </header>
        <p>Write your note</p>
      </section>
    );
  }
}

export default CardNote;
