import './Navbar.css'
import { motion } from 'framer-motion'
import { menuSlide } from './anime.js'
function Navbar() {
  return (
    <>
      <motion.nav
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-gray-900 text-gray-100 h-screen fixed top-0 right-0"
      >
        <div className="box-border h-full w-full p-28 flex flex-col justify-between">
          <p className="nav-title text-xs text-gray-400">Navigation</p>
          <div className="flex flex-col gap-8 text-5xl">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="#">Linkedin</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
