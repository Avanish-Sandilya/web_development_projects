import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greetings.jsx'
import Quote from './Quote.jsx'
import AnimalList from './Animals.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <Quote/>
    <AnimalList/>
  </StrictMode>,
)
