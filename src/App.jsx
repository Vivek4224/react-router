import { useState } from 'react'
import './App.css'
import Router1 from './Router/Router1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router1 />
    </>
  )
}

export default App
