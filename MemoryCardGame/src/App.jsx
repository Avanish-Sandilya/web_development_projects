import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
   <div>
    <Header score={score} highScore={highScore}/>
    <Footer/>
   </div>
  )
}

export default App
