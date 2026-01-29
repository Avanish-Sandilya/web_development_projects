import { useState } from "react";

const ShowAverage = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>Average: 0</p>;
  }

  const finalTotal = (good - bad) / total;

  return <p>Average: {finalTotal.toFixed(2) * 10}/10</p>;
};

const PositivePercentage = (props) => {
  const positiveTotal = props.total - (props.neutral + props.negative);
  const percentage = (positiveTotal / props.total) * 100;

  if (props.total === 0) {
    return <p>Positive percentage: 0</p>;
  }

  return <>Positive percentage:{percentage.toFixed(2)}%</>;
};

const Statistics = ({ good, neutral, negative }) => {
  const total = good + neutral + negative;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {negative}</p>
      <ShowAverage good={good} neutral={neutral} bad={negative} />
      <PositivePercentage total={total} neutral={neutral} negative={negative} />
    </>
  );
};

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGoodCount(goodCount + 1)}>Good</button>
      <button onClick={() => setNeutralCount(neutralCount + 1)}>Neutral</button>
      <button onClick={() => setBadCount(badCount + 1)}>Bad</button>
      <h2>Statistics</h2>
      <Statistics good={goodCount} neutral={neutralCount} negative={badCount} />
    </>
  );
}

export default App;
