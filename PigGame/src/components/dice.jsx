import { useState } from "react";
import d1 from "../img/dice-1.png";
import d2 from "../img/dice-2.png";
import d3 from "../img/dice-3.png";
import d4 from "../img/dice-4.png";
import d5 from "../img/dice-5.png";
import d6 from "../img/dice-6.png";

const diceValues = [
  { src: d1, value: 1 },
  { src: d2, value: 2 },
  { src: d3, value: 3 },
  { src: d4, value: 4 },
  { src: d5, value: 5 },
  { src: d6, value: 6 },
];

function PigGame() {
  const [die, setDie] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleRoll = () => {
    if (winner !== null) return;

    const randomDie = diceValues[Math.floor(Math.random() * diceValues.length)];
    setDie(randomDie);

    if (randomDie.value === 1) {
      setCurrentScore(0);
      switchPlayer();
    } else {
      setCurrentScore(prev => prev + randomDie.value);
    }
  };

  const handleHold = () => {
    if (winner !== null) return;

    const newScores = [...scores];
    newScores[currentPlayer] += currentScore;
    setScores(newScores);

    if (newScores[currentPlayer] >= 100) {
      setWinner(currentPlayer);
    } else {
      setCurrentScore(0);
      switchPlayer();
    }
  };

  const switchPlayer = () => {
    setCurrentPlayer(prev => (prev === 0 ? 1 : 0));
  };

  const handleNewGame = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setCurrentPlayer(0);
    setWinner(null);
    setDie(null);
  };

  return (
    <div className="game-container">
      <h1>Pig Dice Game</h1>

      <div className="players">
        <div className={`player ${currentPlayer === 0 ? "active" : ""}`}>
          <h2>Player 1 {winner === 0 && "🏆"}</h2>
          <p>Total: {scores[0]}</p>
          {currentPlayer === 0 && <p>Current: {currentScore}</p>}
        </div>

        <div className={`player ${currentPlayer === 1 ? "active" : ""}`}>
          <h2>Player 2 {winner === 1 && "🏆"}</h2>
          <p>Total: {scores[1]}</p>
          {currentPlayer === 1 && <p>Current: {currentScore}</p>}
        </div>
      </div>

      <div className="dice-section">
        <button onClick={handleRoll} disabled={winner !== null}>
          Roll Die
        </button>
        <button onClick={handleHold} disabled={winner !== null}>
          Hold
        </button>
        {die && (
          <>
            <img className="dice" src={die.src} alt={`Die face ${die.value}`} />
            <p className="rollValue">Rolled: {die.value}</p>
          </>
        )}
        {winner !== null && (
          <>
            <h2>🎉 Player {winner + 1} Wins!</h2>
            <button onClick={handleNewGame}>New Game</button>
          </>
        )}
      </div>
    </div>
  );
}

export default PigGame;
