import type { NextPage } from 'next'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div>
      <motion.p className="text-3xl font-bold underline" animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        hello world
      </motion.p>
    </div>
  )
}

export default Home
