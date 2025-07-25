const bookList = [];

// Book Constructor
function Book(author, name, genre) {
  this.author = author;
  this.name = name;
  this.genre = genre;
  this.id = Number(`${Date.now()}${Math.floor(Math.random() * 10000)}`);
}

// Add a Book
function addBook(author, name, genre) {
  const newBook = new Book(author, name, genre);
  bookList.push(newBook);
  return newBook;
}

// Search Books
function searchBook(criteria) {
  const { author, id, name, genre } = criteria;
  return bookList.filter((book) => {
    return (
      (!author || book.author.toLowerCase().includes(author.toLowerCase())) &&
      (!id || book.id === Number(id)) &&
      (!name || book.name.toLowerCase().includes(name.toLowerCase())) &&
      (!genre || book.genre.toLowerCase().includes(genre.toLowerCase()))
    );
  });
}

// Overlay Handling
const overlay = document.getElementById("resultOverlay");
const resultText = document.getElementById("resultText");
const closeOverlay = document.getElementById("closeOverlay");

function showOverlay(message) {
  resultText.innerHTML = message;
  overlay.classList.remove("hidden");
}

closeOverlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// DOM Elements
const addForm = document.querySelector(".add_card .search_form");
const searchForm = document.querySelector(".find_card .search_form");
const bookIdField = addForm.querySelector("#book_id");
const allBooksBtn = searchForm.querySelector(".button_find:nth-child(2)");

// Handle Add Book
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const author = addForm.querySelector("#author_add").value.trim();
  const name = addForm.querySelector("#book_name").value.trim();
  const genre = addForm.querySelector("#genre").value.trim();

  if (author && name && genre) {
    const book = addBook(author, name, genre);
    addForm.reset(); // clear inputs first
    bookIdField.value = book.id; // set the ID afterwards
    showOverlay(
      `✅ Book added!<br><strong>${book.name}</strong> by ${book.author}<br>ID: ${book.id}`
    );
  }
});

// Handle Search
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const author = searchForm.querySelector("#author_search").value.trim();
  const id = searchForm.querySelector("#book_id").value.trim();
  const name = searchForm.querySelector("#book_name").value.trim();
  const genre = searchForm.querySelector("#genre").value.trim();

  const results = searchBook({ author, id, name, genre });

  if (results.length > 0) {
    const html = results
      .map(
        (b) =>
          `<div>📘 <strong>${b.name}</strong><br>Author: ${b.author}<br>Genre: ${b.genre}<br>ID: ${b.id}</div>`
      )
      .join("<hr>");
    showOverlay(`🔍 Found ${results.length} book(s):<br><br>` + html);
  } else {
    showOverlay("❌ No books found with the given criteria.");
  }
});

// Handle Show All Books
allBooksBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (bookList.length === 0) {
    showOverlay("📭 No books have been added yet.");
    return;
  }

  const html = bookList
    .map(
      (b) =>
        `<div>📘 <strong>${b.name}</strong><br>Author: ${b.author}<br>Genre: ${b.genre}<br>ID: ${b.id}</div>`
    )
    .join("<hr>");
  showOverlay("📚 All Books:<br><br>" + html);
});
