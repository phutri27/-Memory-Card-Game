import { useState } from 'react'
import { Header } from './components/header'
import { Cards } from './components/cards'
import './styles/styles.css'

function App() {
  const [score, setScore] = useState(0)
  return (
    <>
      <Header 
      score={score}
      />
      <Cards 
      onScore={setScore}/>
    </>
  )
}

export default App
