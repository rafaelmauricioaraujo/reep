export default class Notes {
  constructor() {
    this.noteList = [];
    this._subscribers = [];
  }

  addSubscriber(func) {
    this._subscribers.push(func);
  }

  notify() {
    this._subscribers.forEach((func) => func(this.noteList));
  }

  removeSubscriber() {}

  addNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.noteList.push(newNote);
    this.notify();
  }

  removeNote(index) {
    this.noteList.splice(index, 1);
    this.notify();
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
