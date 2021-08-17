export default class Categories {
  constructor() {
    this.categoryList = [];
    this._subscribers = [];
    console.log("subscribes on constructor", this._subscribers);
  }

  addSubscriber(func) {
    this._subscribers.push(func);
    console.log("subscribers add", this._subscribers);
  }

  notify() {
    this._subscribers.forEach((func) => func(this.categoryList));
  }

  removeSubscriber() {}

  addCategory(categoryValue) {
    this.categoryList.push(categoryValue);
    this.notify();
  }
}
