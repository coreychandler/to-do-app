import { getProjectList, createProject, setupTestData } from "./datacontroller";

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
      resetMainDisplay();
      project.getList().forEach((todo) => {
        createTodoDisplay(todo);
      });
    });
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

function toggleHidden(element) {
  element.classList.toggle("hidden");
}

function createTodoDisplay(task) {
  const main = document.querySelector(".main");
  const todoItem = document.createElement("div");
  const todoTitle = document.createElement("p");
  todoTitle.textContent = task.title;
  const todoDate = document.createElement("p");
  todoDate.textContent = task.dueDate;
  todoItem.classList.add("todo-item");
  todoItem.appendChild(todoTitle);
  todoItem.appendChild(todoDate);
  main.appendChild(todoItem);
}

function resetMainDisplay() {
  const main = document.querySelector(".main");
  main.textContent = "";
}

function resetProjectDisplay() {
  const projectListElem = document.querySelector(".project-list");
  projectListElem.textContent = "";
}
