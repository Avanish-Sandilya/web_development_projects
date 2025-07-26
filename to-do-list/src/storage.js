import Project from './project.js';
import Todo from './todo.js';

let projects = [];

export function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjects() {
  const data = JSON.parse(localStorage.getItem('projects'));
  if (!data) return [];

  return data.map(p => {
    const proj = new Project(p.name);
    p.todos.forEach(t => {
      const todo = new Todo(t.title, t.description, t.dueDate, t.priority, t.notes);
      todo.completed = t.completed;
      proj.addTodo(todo);
    });
    return proj;
  });
}

export function getProjects() {
  return projects;
}

export function setProjects(p) {
  projects = p;
}
