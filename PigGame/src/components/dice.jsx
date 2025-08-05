import { useState } from "react";
import d1 from "../img/dice-1.png";
import d2 from "../img/dice-2.png";
import d3 from "../img/dice-3.png";
import d4 from "../img/dice-4.png";
import d5 from "../img/dice-5.png";
import d6 from "../img/dice-6.png";

function DieRoll() {
  const diceFaces = [
    { src: d1, value: 1 },
    { src: d2, value: 2 },
    { src: d3, value: 3 },
    { src: d4, value: 4 },
    { src: d5, value: 5 },
    { src: d6, value: 6 },
  ];

  const [die, setDie] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(0); // 0 = Player 1, 1 = Player 2
  const [scores, setScores] = useState([0, 0]);
  const [currentScores, setCurrentScores] = useState([0, 0]);

  const handleRoll = () => {
    const roll = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    setDie(roll);

    if (roll.value === 1) {
      // Rolled 1: lose current score, switch player
      const updatedCurr = [...currentScores];
      updatedCurr[currentPlayer] = 0;
      setCurrentScores(updatedCurr);
      switchPlayer();
    } else {
      // Add to current score
      const updatedCurr = [...currentScores];
      updatedCurr[currentPlayer] += roll.value;
      setCurrentScores(updatedCurr);
    }
  };

  const handleHold = () => {
    // Add current score to total, reset current score, switch player
    const updatedScores = [...scores];
    updatedScores[currentPlayer] += currentScores[currentPlayer];
    setScores(updatedScores);

    const updatedCurr = [...currentScores];
    updatedCurr[currentPlayer] = 0;
    setCurrentScores(updatedCurr);

    switchPlayer();
  };

  const switchPlayer = () => {
    setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="game-container">
      <h1>Pig Dice Game</h1>
      <div className="players">
        {[0, 1].map((player) => (
          <div
            key={player}
            className={`player ${currentPlayer === player ? "active" : ""}`}
          >
            <h2>Player {player + 1}</h2>
            <p>Total Score: {scores[player]}</p>
            <p>Current Turn Score: {currentScores[player]}</p>
          </div>
        ))}
      </div>

      <div className="dice-section">
        <button onClick={handleRoll}>Roll</button>
        <button onClick={handleHold}>Hold</button>
        {die && (
          <>
            <img className="dice" src={die.src} alt={`Rolled ${die.value}`} />
            <p>You rolled: {die.value}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default DieRoll;
