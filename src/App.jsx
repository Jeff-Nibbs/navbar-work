import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import { AnimatePresence } from 'framer-motion'
import FullNavbar from './FullNavbar'
import Sections from './Sections'

function App() {
  const [isActive, setIsActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <>
      {windowWidth < 768 ? (
        <>
          <div
            onClick={() => setIsActive(!isActive)}
            className="h-14 w-14 z-10 rounded-full bg-sky-900 fixed right-0 m-5 flex items-center justify-center cursor-pointer"
          >
            <div className={`w-full hamburger ${isActive ? 'burgerActive' : ''}`}></div>
          </div>
          <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>{' '}
        </>
      ) : (
        <FullNavbar />
      )}
      <Sections />
      <Sections />
      <Sections />
    </>
  )
}

export default App
