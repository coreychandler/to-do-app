import Project from "./project";
import TodoItem from "./todo";

const projectList = [];
let selectedProject = null;

export function setSelectedProject(project) {
  selectedProject = project;
}

export function getSelectedProject() {
  return selectedProject;
}

export function setupTestData() {
  const homeProject = new Project("Home");

  const newTodo = new TodoItem(
    "My Title",
    "A great description",
    "12/1/2023",
    "High Priority",
    "notesnotesnotes",
    false
  );

  homeProject.addToList(newTodo);
  projectList.push(homeProject);
}

export function getProjectList() {
  return projectList;
}

export function getToDoList(project) {
  return project.getList();
}

export function createProject(name) {
  const newProject = new Project(name);
  projectList.push(newProject);
  console.log(projectList);
}

export function createTodo(name, date, priority) {
  //idk yet
}

export function deleteTodo(todo) {
  //idk yet
}
