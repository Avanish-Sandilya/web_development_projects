import Project from './project.js';
import Todo from './todo.js';
import { saveToStorage, loadFromStorage, resetStorage } from './storage.js';

let projects = loadFromStorage();
if (projects.length === 0) projects.push(new Project('Default'));

let currentProjectIndex = 0;

// DOM Elements
const projectList = document.getElementById('projectList');
const todoList = document.getElementById('todoList');
const currentProjectTitle = document.getElementById('currentProjectTitle');

const newProjectName = document.getElementById('newProjectName');
const addProjectBtn = document.getElementById('addProjectBtn');

const todoTitle = document.getElementById('todoTitle');
const todoDesc = document.getElementById('todoDesc');
const todoDate = document.getElementById('todoDate');
const todoPriority = document.getElementById('todoPriority');
const addTodoBtn = document.getElementById('addTodoBtn');

const resetAppBtn = document.getElementById('resetAppBtn');

// Render
function renderProjects() {
  projectList.innerHTML = '';
  projects.forEach((project, index) => {
    const li = document.createElement('li');
    li.textContent = project.name;

    li.addEventListener('click', () => {
      currentProjectIndex = index;
      renderTodos();
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑️';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      if (confirm(`Delete project "${project.name}"?`)) {
        projects.splice(index, 1);
        if (currentProjectIndex === index) currentProjectIndex = 0;
        saveToStorage(projects);
        renderProjects();
        renderTodos();
      }
    };

    li.appendChild(delBtn);
    projectList.appendChild(li);
  });
}

function renderTodos() {
  const project = projects[currentProjectIndex];
  currentProjectTitle.textContent = project.name;
  todoList.innerHTML = '';

  project.todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = `${todo.title} (${todo.dueDate}) [${todo.priority}]`;

    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = () => {
      project.deleteTodo(index);
      saveToStorage(projects);
      renderTodos();
    };

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

// Add Project
addProjectBtn.addEventListener('click', () => {
  const name = newProjectName.value.trim();
  if (!name) return alert("Project name can't be empty.");
  projects.push(new Project(name));
  newProjectName.value = '';
  saveToStorage(projects);
  renderProjects();
});

// Add Todo
addTodoBtn.addEventListener('click', () => {
  const title = todoTitle.value.trim();
  const desc = todoDesc.value.trim();
  const date = todoDate.value;
  const priority = todoPriority.value.trim().toLowerCase();

  if (!title || !desc || !date || !['low', 'medium', 'high'].includes(priority)) {
    return alert("Please enter valid todo details.");
  }

  const todo = new Todo(title, desc, date, priority);
  projects[currentProjectIndex].addTodo(todo);
  saveToStorage(projects);
  renderTodos();

  todoTitle.value = '';
  todoDesc.value = '';
  todoDate.value = '';
  todoPriority.value = '';
});

// Reset App
resetAppBtn.addEventListener('click', () => {
  if (confirm('This will delete all projects and todos. Continue?')) {
    resetStorage();
    location.reload();
  }
});

// Initial render
renderProjects();
renderTodos();
