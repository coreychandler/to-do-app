import {
  getProjectList,
  createProject,
  setupTestData,
  getSelectedProject,
  setSelectedProject,
} from "./datacontroller";

//load the projects, may be expanded to use localstorage and then real storage later

export function init() {
  setupTestData();
  renderProjects();
  addProjectEvents();
}

export function renderProjects() {
  resetProjectDisplay();

  const projectListElem = document.querySelector(".project-list");
  getProjectList().forEach((project) => {
    const projectElem = document.createElement("button");
    projectElem.classList.add("project-btn");
    projectElem.textContent = project.name;
    projectListElem.appendChild(projectElem);
    projectElem.addEventListener("click", () => {
      displayProject(project);
    });
  });
}

function displayProject(project) {
  setSelectedProject(project);
  resetMainDisplay();
  project.getList().forEach((todo) => {
    createTodoDisplay(todo);
  });
}

export function addProjectEvents() {
  //const left = document.querySelector(".left");
  const projOverlay = document.querySelector(".project-overlay");
  const addProjectBtn = document.querySelector(".addproject");
  const projInput = document.querySelector(".proj-name");
  const submitProject = document.querySelector(".confirm.proj-btn");
  addProjectBtn.addEventListener("click", () => {
    toggleHidden(projOverlay);
  });

  submitProject.addEventListener("click", () => {
    toggleHidden(projOverlay);
    createProject(projInput.value);
    renderProjects();
  });
}

export function addTodoEvents() {
  const todoOverlay = document.querySelector(".todo-overlay");
  const addTodoBtn = document.querySelector(".addtodo");
  addTodoBtn.addEventListener("click", () => {
    toggleHidden(todoOverlay);
  });
}

function toggleHidden(element) {
  console.log(element);
  element.classList.toggle("hidden");
}

function createTodoDisplay(task) {
  const main = document.querySelector(".main");
  //create the task components
  const todoItem = document.createElement("div");
  const todoTitle = document.createElement("p");
  todoTitle.textContent = task.title;
  const todoDate = document.createElement("p");
  todoDate.textContent = task.dueDate;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn");
  //set the class and append
  todoItem.classList.add("todo-item");
  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDate);
  todoItem.appendChild(deleteButton);
  const addTodoButton = main.querySelector(".addtodo");
  main.insertBefore(todoItem, addTodoButton);
}

function resetMainDisplay() {
  //const main = document.querySelector(".main");
  const elements = document.querySelectorAll(".todo-item");
  elements.forEach((element) => {
    element.remove();
  });
}

function resetProjectDisplay() {
  const projectListElem = document.querySelector(".project-list");
  projectListElem.textContent = "";
}

//next: add button to add more tasks and
//then add close/edit functionality on the tasks
