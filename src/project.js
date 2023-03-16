export default class Project {
  #todoList = [];

  constructor(name) {
    this.name = name;
  }

  getList() {
    return this.#todoList;
  }

  addToList(item) {
    this.#todoList.push(item);
  }

  removeFromList(item) {
    const index = this.#todoList.indexOf(item);
    if (index > -1) {
      this.#todoList.splice(index, 1);
    }
  }
}
