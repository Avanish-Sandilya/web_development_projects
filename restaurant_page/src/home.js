// src/home.js
export default function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.innerHTML = `
    <h1>Welcome to Peaceful Bites</h1>
    <p>Enjoy healthy, delicious meals prepared with care and love.</p>
    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant" style="max-width: 100%;">
  `;
  content.appendChild(homeDiv);
}
