import { TodoItem } from "./todo";
import { Project } from "./project";

//the list of projects, idk if this should be global scope
const projectList = [];

//try to load projects, otherwise start up a new one
export function init() {
  //nothing yet
}

function createSampleData() {
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
