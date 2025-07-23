
export default function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
    <h1>Our Menu</h1>
    <ul>
      <li>Grilled Salmon Bowl</li>
      <li>Avocado Toast</li>
      <li>Fruit Smoothies</li>
    </ul>
  `;
  content.appendChild(menuDiv);
}
