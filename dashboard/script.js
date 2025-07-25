document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`${btn.textContent} button clicked!`);
    });
  });
});

