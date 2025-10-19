function Quote() {
  const style = {
    fontStyle: "italic",
  };

  const words = ["Hustle", "Loyalty", "Respect"];

  const wordList = words.map((word) => <li key={word}>{word}</li>);

  return (
    <>
      <h2 style={style}>John Cena</h2>
      <ul style={style}>{wordList}</ul>
    </>
  );
}

export default Quote;
