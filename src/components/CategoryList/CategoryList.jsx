import React, { Component } from "react";

class CategoryList extends Component {
  _handleEventInput(event) {
    if (event.key == "Enter") {
      let categoryValue = event.target.value;
      this.props.addCategory(categoryValue);
    };
  };

  render() {
    return (
      <section>
        <ul>
          {this.props.categoryList.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventInput.bind(this)}
        ></input>
      </section>
    );
  };
};

export default CategoryList;
