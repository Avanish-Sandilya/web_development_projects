export function saveToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadFromStorage() {
  const data = JSON.parse(localStorage.getItem('projects'));
  return data ? data : [];
}

export function resetStorage() {
  localStorage.clear();
}
