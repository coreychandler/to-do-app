/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/datacontroller.js":
/*!*******************************!*\
  !*** ./src/datacontroller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "getProjectList": () => (/* binding */ getProjectList),
/* harmony export */   "getToDoList": () => (/* binding */ getToDoList),
/* harmony export */   "setupTestData": () => (/* binding */ setupTestData)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const projectList = [];

function setupTestData() {
  const homeProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Home");

  const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](
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

function getProjectList() {
  return projectList;
}

function getToDoList(project) {
  return project.getList();
}

function createProject(name) {
  const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
  projectList.push(newProject);
}


/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectEvents": () => (/* binding */ addProjectEvents),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _datacontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datacontroller */ "./src/datacontroller.js");


//load the projects, may be expanded to use localstorage and then real storage later

function init() {
  (0,_datacontroller__WEBPACK_IMPORTED_MODULE_0__.setupTestData)();
  renderProjects();
  addProjectEvents();
}

function renderProjects() {
  resetProjectDisplay();

  const projectListElem = document.querySelector(".project-list");
  (0,_datacontroller__WEBPACK_IMPORTED_MODULE_0__.getProjectList)().forEach((project) => {
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

function addProjectEvents() {
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
    (0,_datacontroller__WEBPACK_IMPORTED_MODULE_0__.createProject)(projInput.value);
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


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
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


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
//import { init } from "./startup";


(0,_display__WEBPACK_IMPORTED_MODULE_0__.init)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map