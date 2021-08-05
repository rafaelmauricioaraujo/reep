import React, { Component } from "react";

export default class NoteList extends Component {
  render() {
    return (
      <ul>
        <li>
          <section>
            <header>
              <h3>Title</h3>
            </header>
            <p>Write your note</p>
          </section>
        </li>
        <li>
          <section>
            <header>
              <h3>Title</h3>
            </header>
            <p>Write your note</p>
          </section>
        </li>
        <li>
          <section>
            <header>
              <h3>Title</h3>
            </header>
            <p>Write your note</p>
          </section>
        </li>
      </ul>
    );
  }
}
