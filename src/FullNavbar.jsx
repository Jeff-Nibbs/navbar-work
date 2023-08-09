import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { menuSlide, navbarSlide } from './anime.js'

function FullNavbar() {
  const [lastScroll, setLastScroll] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > lastScroll && window.scrollY > 214) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
    setLastScroll(window.scrollY)
  }

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    // eslint-disable-next-line
    [lastScroll]
  )

  return (
    <motion.nav
      variants={navbarSlide}
      initial="initial"
      animate={isActive ? 'enter' : 'exit'}
      className="flex px-8 py-5 justify-between bg-purple-600 border-b-2 border-gray-800 shadow-lg fixed top-0 w-full "
    >
      <a className="text-3xl" href="#">
        {lastScroll}
      </a>
      <div className="flex gap-6">
        <a className="hover:text-sky-400" href="#">
          Home
        </a>
        <a className="hover:text-sky-400" href="#">
          About
        </a>
        <a className="hover:text-sky-400" href="#">
          Gallery
        </a>
        <a className="hover:text-sky-400" href="#">
          Contact
        </a>
      </div>
    </motion.nav>
  )
}

export default FullNavbar
