function Book(prop) {
  return <li>{prop.bookName}</li>;
}

function BookList(prop) {
  const bookList = prop.books.map((book) => (
    <Book key={book.id} bookName={book.name} />
  ));

  return <ul>{bookList}</ul>;
}

function Books() {
  const books = [
    { name: "Effective Java", id: crypto.randomUUID() },
    { name: "Clean Code", id: crypto.randomUUID() },
    { name: "Let Us C", id: crypto.randomUUID() },
  ];

  return (
    <>
      <h1>Books</h1>
      <BookList books={books} />
    </>
  );
}

export default Books;
