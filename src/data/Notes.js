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

  addNote(title, text, categoy) {
    const newNote = new Note(title, text, categoy);
    this.noteList.push(newNote);
  }

  removeNote(index) {
    this.noteList.splice(index, 1);
  }
}

class Note {
  constructor(title, text, categoy) {
    this.title = title;
    this.text = text;
    this.categoy = categoy;
  }
}
