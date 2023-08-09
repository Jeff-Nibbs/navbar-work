import './Navbar.css'
import { motion } from 'framer-motion'
import { menuSlide } from './anime.js'
import Link from './Link'
import Footer from './Footer'
import Curve from './Curve'
import { useState, useEffect } from 'react'
function Navbar() {
  const links = ['Home', 'About', 'Gallery', 'Contact']

  return (
    <>
      <motion.nav
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-sky-900 text-gray-100 h-screen fixed top-0 right-0"
      >
        <div className="box-border h-full w-full p-28 flex flex-col justify-between">
          <p className="nav-title text-xs text-gray-400">Navigation</p>
          <div className="flex flex-col gap-8 text-5xl">
            {links.map((data, index) => {
              return <Link key={index} step={index} data={data}></Link>
            })}
          </div>
          <Footer />
        </div>
        <Curve />
      </motion.nav>
    </>
  )
}

export default Navbar
