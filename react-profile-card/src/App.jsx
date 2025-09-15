import { useState } from 'react'
import './App.css'
import { ProfileCard } from './ProfileCard';

function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
    <ProfileCard index={index} setIndex={setIndex} />
    </>
  )
}

export default App
