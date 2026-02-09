import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhoneBook from './phoneBook'


function App() {
  const [person,setPerson]=useState({
    contactName:"name",
    number:"0000000000"
  })
}

export default App
