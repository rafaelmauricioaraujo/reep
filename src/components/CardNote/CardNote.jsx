import React, { Component } from "react";
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";

class CardNote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">{this.props.title}</h3>
          <img src={deleteSVG}></img>
        </header>
        <p className="card-note_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
