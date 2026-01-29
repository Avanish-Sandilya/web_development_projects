import { useState } from 'react'


const ShowAverage = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>Average: 0</p>
  }

  const finalTotal = (good - bad) / total;

  return (
    <p>Average: {finalTotal.toFixed(2)*10}/10</p>
  )
}

const PositivePercentage = (props)=>{
  const positiveTotal = props.total-(props.neutral+props.negative);
  const percentage = (positiveTotal/props.total)*100;

  if (props.total === 0) {
    return <p>Positive percentage: 0</p>
  }

  return(<>Positive percentage:{percentage.toFixed(2)}%</>)

}


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
    <ShowAverage good={goodCount} neutral={neutralCount} bad={badCount}/>
    <PositivePercentage total ={goodCount+badCount+neutralCount} negative={badCount} neutral={neutralCount}/>
    </>
  )
}

export default App
