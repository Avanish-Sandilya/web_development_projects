// src/main.js
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

document.getElementById("homeBtn").addEventListener("click", () => {
  clearContent();
  loadHome();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  clearContent();
  loadMenu();
});

document.getElementById("contactBtn").addEventListener("click", () => {
  clearContent();
  loadContact();
});

// Load Home tab by default
loadHome();
