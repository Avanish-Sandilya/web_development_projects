import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Greeting,AnimalList,SportsList} from './Greetings.jsx'
import Players from './Player.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <AnimalList/>
    <SportsList/>
    <Players/>
  </StrictMode>,
)
