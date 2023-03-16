export default class TodoItem {
  isComplete = false;
  constructor(title, description, dueDate, priority, notes, isComplete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.isComplete = isComplete;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
