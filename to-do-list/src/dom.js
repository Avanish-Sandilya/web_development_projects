import { getProjects, setProjects, saveProjects } from './storage.js';
import Todo from './todo.js';

let currentProjectIndex = 0;

export function renderProjects() {
  const projects = getProjects();
  const container = document.getElementById('projects');
  container.innerHTML = '';

  projects.forEach((p, index) => {
    const btn = document.createElement('button');
    btn.textContent = p.name;
    btn.onclick = () => {
      currentProjectIndex = index;
      renderTodos();
    };
    container.appendChild(btn);
  });

  const addBtn = document.createElement('button');
  addBtn.textContent = '+ Add Project';
  addBtn.onclick = async () => {
    const name = prompt('Project name?');
    if (name) {
      const newProject = new (await import('./project.js')).default(name);
      const updated = getProjects();
      updated.push(newProject);
      setProjects(updated);
      saveProjects();
      renderProjects();
    }
  };
  container.appendChild(addBtn);
}

export function renderTodos() {
  const projects = getProjects();
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  const project = projects[currentProjectIndex];
  project.todos.forEach((todo, index) => {
    const div = document.createElement('div');
    div.className = `todo ${todo.priority}`;

    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p><strong>Due:</strong> ${todo.dueDate}</p>
      <p>${todo.notes}</p>
      <button data-index="${index}">Delete</button>
    `;

    div.querySelector('button').onclick = () => {
      project.deleteTodo(index);
      saveProjects();
      renderTodos();
    };

    todoList.appendChild(div);
  });
}

export function bindAddTodo() {
  document.getElementById('add-todo').onclick = () => {
    const title = prompt('Title?');
    const description = prompt('Description?');
    const dueDate = prompt('Due Date? (YYYY-MM-DD)');
    const priority = prompt('Priority? (low, medium, high)');
    const notes = prompt('Notes?');

    if (title) {
      const newTodo = new Todo(title, description, dueDate, priority, notes);
      const projects = getProjects();
      projects[currentProjectIndex].addTodo(newTodo);
      saveProjects();
      renderTodos();
    }
  };
}
