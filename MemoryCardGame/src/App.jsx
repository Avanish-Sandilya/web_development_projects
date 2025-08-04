import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
   <div className="app">
    <Header score={score} highScore={highScore}/>
     <Body
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    <Footer/>
   </div>
  )
}

export default App
