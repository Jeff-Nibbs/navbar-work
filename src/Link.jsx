import { motion } from 'framer-motion'
import { slide } from './anime'

function Link(props) {
  const { step, data } = props
  return (
    <motion.div custom={step} variants={slide} initial="initial" animate="enter" exit="exit">
      <a href="#">{data}</a>
    </motion.div>
  )
}

export default Link
