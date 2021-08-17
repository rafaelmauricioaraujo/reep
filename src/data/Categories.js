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

  removeSubscriber(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func);
  }

  addCategory(categoryValue) {
    this.categoryList.push(categoryValue);
    this.notify();
  }
}
