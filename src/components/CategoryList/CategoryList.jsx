import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
  componentDidMount() {
    this.props.categoryList.addSubscriber(this._newCategories.bind(this));
  }

  _newCategories(categories) {
    console.log("categories: ", categories);
  }

  _handleEventInput(event) {
    if (event.key === "Enter") {
      let categoryValue = event.target.value;
      this.props.addCategory(categoryValue);
    }
  }

  render() {
    return (
      <section className="list-category">
        <ul className="list-category_list">
          {this.props.categoryList.categoryList.map((category, index) => {
            return (
              <li className="list-category_item" key={index}>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          className="list-category_input"
          onKeyUp={this._handleEventInput.bind(this)}
        ></input>
      </section>
    );
  }
}

export default CategoryList;
