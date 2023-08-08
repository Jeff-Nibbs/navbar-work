import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="h-14 w-14 z-10 rounded-full bg-sky-400 fixed right-0 m-5 flex items-center justify-center cursor-pointer"
      >
        <div className={`w-full hamburger ${isActive ? 'burgerActive' : ''}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  )
}

export default App
