import { useState } from 'react'

function randomNumber(length) {
  return Math.floor(Math.random() * length)
}



function App() {
  const anecdotes = [
    { quote: 'If it hurts, do it more often.', vote: 0 },
    { quote: 'Adding manpower to a late software project makes it later!', vote: 0 },
    { quote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...', vote: 0 },
    { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0 },
    { quote: 'Premature optimization is the root of all evil.', vote: 0 },
    { quote: 'Debugging is twice as hard as writing the code in the first place.', vote: 0 },
    { quote: 'Programming without console.log is like a doctor refusing X-rays.', vote: 0 },
    { quote: 'The only way to go fast, is to go well.', vote: 0 }
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    setSelected(randomNumber(anecdotes.length))
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes=Math.max(...votes);
  const highestIndex = votes.indexOf(maxVotes);


  return (
    <>
      <p>{anecdotes[selected].quote}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next</button>
      <h2>Higest voted quote</h2>
      <p>{anecdotes[highestIndex].quote}</p>
    </>
  )
}

export default App
