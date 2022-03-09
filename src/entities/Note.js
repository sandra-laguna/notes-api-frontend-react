export class Note {
  constructor({ id, content, date, important } = {}) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.important = important;
  }
}
