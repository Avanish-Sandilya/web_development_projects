import { useState } from "react";

function Game() {
  const [guess, setGuess] = useState("");
  const [color, setColor] = useState("white");
  const [randomNumber] = useState(() => Math.floor(Math.random() * 20) + 1);
  const [tryCount, setTryCount] = useState(1);

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleClick = (clickValue) => {
    if (tryCount === 6) return;

    if (clickValue === randomNumber) {
      setGuess("You have guessed the correct number");
      setColor("lightgreen");
    } else {
      const newTryCount = tryCount + 1;
      setTryCount(newTryCount);
      setGuess("Try again");
      setColor("lightcoral");

      if (newTryCount === 6) {
        setGuess(`Computer wins, the correct number was ${randomNumber}`);
      }
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="gameContainer">
      <h1>Guess The Number</h1>
      <p>Guess a number between 1 and 20. You have 5 attempts.</p>
      <ul>
        {numbers.map((num) => (
          <li
            key={num}
            onClick={() => handleClick(num)}
            style={{ backgroundColor: color }}
          >
            {num}
          </li>
        ))}
      </ul>
      <p>{guess}</p>
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default Game;
