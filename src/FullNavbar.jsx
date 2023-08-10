import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navbarSlide } from './anime.js'

function FullNavbar() {
  const [lastScroll, setLastScroll] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [isPurple, setIsPurple] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > lastScroll && window.scrollY > 500) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
    setLastScroll(window.scrollY)
  }

  const handleNavTransistion = () => {
    if (window.scrollY > 230) {
      setIsPurple(true)
    } else {
      setIsPurple(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavTransistion)
    return () => {
      window.removeEventListener('scroll', handleNavTransistion)
    }
  }, [])

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
      className={`flex px-8 py-5 justify-between ${
        isPurple ? 'bg-purple-600 border-gray-800 shadow-lg border-b-2' : 'bg-transparent'
      } transition-colors fixed top-0 w-full z-50`}
    >
      <a className="text-3xl" href="#">
        Logo
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
