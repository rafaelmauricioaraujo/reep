import React, { Component } from "react";
import "./style.css";
// import deleteSVG from "../../assets/img/delete.svg";

/*
 To use svg images like react component is necessary the use of tool SVGR
 that was installed in project with command react-create-app. 
**/
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNote extends Component {
  constructor(props) {
    super(props);
  }

  deleteNote() {
    const id = this.props.id;
    this.props.deleteNote(id);
  }

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">{this.props.title}</h3>
          {/* <img src={deleteSVG}></img> */}
          <DeleteSVG onClick={this.deleteNote.bind(this)} />
          <h4>{this.props.category}</h4>
        </header>
        <p className="card-note_text">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNote;
