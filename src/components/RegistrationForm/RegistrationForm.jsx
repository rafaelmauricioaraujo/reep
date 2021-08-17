import React, { Component } from "react";
import "./style.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Uncategorized";
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.props.categoryList.addSubscriber(this._newCategories.bind(this));
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handlerChangeTitle(event) {
    this.title = event.target.value;
  }

  _handlerChangeText(event) {
    this.text = event.target.value;
  }

  _handleChangeCategory(event) {
    event.preventDefault();
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form
        className="registration-form"
        onSubmit={this._createNote.bind(this)}
      >
        <select
          onChange={this._handleChangeCategory.bind(this)}
          className="registration-form_input"
        >
          <option>Uncategorized</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
          onChange={this._handlerChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note..."
          className="registration-form_input"
          onChange={this._handlerChangeText.bind(this)}
        />
        <button className="registration-form_input registration-form_submit">
          Create note
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
