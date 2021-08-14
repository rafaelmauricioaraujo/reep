export default class Categories {
  constructor() {
    this.categoryList = [];
    this._subscribers = [];
  }

  addSubscriber(func) {
    this._subscribers.push(func);
  }

  notify() {
    this._subscribers.forEach((func) => func(this.categoryList));
  }

  removeSubscriber() {}

  addCategory(categoryValue) {
    this.categoryList.push(categoryValue);
  }
}
