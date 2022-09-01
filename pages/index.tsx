import type { NextPage } from 'next'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import useUIStore from '../store/uiStore'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiCode, FiSend } from 'react-icons/fi'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

const Home: NextPage = () => {
  const { backgroundIcon } = useUIStore()

  return (
    <div className="flex h-full flex-col items-center text-center dark:text-white">
      <Head>
        <title>stephen sparling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative z-10 my-auto flex flex-col items-center">
        <h1 className="font-sans text-6xl font-semibold">stephen sparling</h1>
        <h2 className="mt-8">web developer | making cool stuff</h2>
        <div className="mt-12 flex flex-col sm:flex-row">
          <LinkButton
            Icon={FiUser}
            href="/about"
            label="who I am"
            className="mb-6 sm:mr-24 sm:mb-0"
            backgroundIcon="user"
          />
          <LinkButton
            Icon={FiCode}
            href="/about"
            label="what I do"
            className="mb-6 sm:mr-24 sm:mb-0"
            bgColor="bg-red-500"
            backgroundIcon="code"
          />
          <LinkButton
            Icon={FiSend}
            href="/about"
            label="where I'm found"
            bgColor="bg-violet-500"
            backgroundIcon="mail"
          />
        </div>
      </div>
      <AnimatePresence>
        {backgroundIcon === 'user' && (
          <motion.div
            key="user"
            initial={{ opacity: 0, scale: 48 }}
            animate={{ opacity: 0.5, scale: 50 }}
            exit={{ opacity: 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className="absolute inset-0 z-0 flex items-center justify-center text-slate-200 dark:text-slate-700"
          >
            <FiUser width="100%" />
          </motion.div>
        )}
        {backgroundIcon === 'code' && (
          <motion.div
            key="code"
            initial={{ opacity: 0, scale: 48 }}
            animate={{ opacity: 0.5, scale: 50 }}
            exit={{ opacity: 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className="absolute inset-0 z-0 flex items-center justify-center text-slate-200 dark:text-slate-700"
          >
            <FiCode width="100%" />
          </motion.div>
        )}
        {backgroundIcon === 'mail' && (
          <motion.div
            key="mail"
            initial={{ opacity: 0, scale: 48 }}
            animate={{ opacity: 0.5, scale: 50 }}
            exit={{ opacity: 0 }}
            transition={DEFAULT_SPRING_TRANSITION}
            className="absolute inset-0 z-0 flex items-center justify-center text-slate-200 dark:text-slate-700"
          >
            <FiSend width="100%" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
