import { useState } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="h-14 w-14 rounded-full bg-sky-400 fixed right-0 m-5 flex items-center justify-center">
        <div className="hamburger w-full"></div>
      </div>
    </>
  )
}

export default App
