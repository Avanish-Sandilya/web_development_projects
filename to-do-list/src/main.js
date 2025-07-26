import { loadProjects, setProjects } from './storage.js';
import { renderProjects, renderTodos, bindAddTodo } from './dom.js';

const loadedProjects = loadProjects();
if (loadedProjects.length === 0) {
  const { default: Project } = await import('./project.js');
  const defaultProject = new Project('Default');
  setProjects([defaultProject]);
} else {
  setProjects(loadedProjects);
}

renderProjects();
renderTodos();
bindAddTodo();
