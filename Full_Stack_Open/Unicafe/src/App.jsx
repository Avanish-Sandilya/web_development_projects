import { useState } from 'react'

function App() {

  const [goodCount, setGoodCount]=useState(0);
  const [neutralCount, setNeutralCount]=useState(0);
  const [badCount, setBadCount]=useState(0);

  const handleGoodClick =()=>{
    setGoodCount(goodCount+1);
  }

  const handleNeutralClick =()=>{
    setNeutralCount(neutralCount+1);
  }

  const handleBadClick =()=>{
    setBadCount(badCount+1);
  }

  return(
    
    <>
    <h1>Give Feedback</h1>
    <button onClick={handleGoodClick}>Good</button>
    <button onClick={handleNeutralClick}>Neutral</button>
    <button onClick={handleBadClick}>Bad</button>
    <h2>Statistics</h2>
    <p>Good:{goodCount}</p>
    <p>Neutral:{neutralCount}</p>
    <p>Bad:{badCount}</p>
    </>
  )
}

export default App
