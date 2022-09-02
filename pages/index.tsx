import type { NextPage } from 'next'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import useUIStore from '../store/uiStore'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiCode, FiSend, FiStar } from 'react-icons/fi'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'
import useHomeScreenGame from '../hooks/useHomeScreenGame'

const Home: NextPage = () => {
  const { backgroundIcon } = useUIStore()
  const {
    playerPosition,
    isPlayerInitialized,
    isGameInitialized,
    playAreaRef,
    playerRef,
    itemPosition,
    score,
    highScore,
    startGame,
    joystickAreaRef,
  } = useHomeScreenGame()

  return (
    <div
      ref={playAreaRef}
      className="relative flex h-full flex-col items-center overflow-hidden text-center dark:text-white"
    >
      <Head>
        <title>
          {isPlayerInitialized
            ? 'collect stars! | sparling.dev'
            : 'stephen sparling'}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={isGameInitialized ? { opacity: 1 } : {}}
        className="pointer-events-none fixed top-0 left-0 z-30 h-full w-full"
      >
        <div
          ref={joystickAreaRef}
          className="pointer-events-auto absolute bottom-0 left-0 flex h-48 w-full items-center justify-center border-2 border-dashed border-slate-400 bg-opacity-100"
        >
          <span className="rounded-md bg-slate-400 p-4">
            VIRTUAL JOYSTICK AREA
          </span>
        </div>
      </motion.div>
      {isPlayerInitialized && (
        <motion.div
          initial={{
            left: playerPosition[0],
            top: playerPosition[1],
            scale: 0.25,
          }}
          animate={{
            left: playerPosition[0],
            top: playerPosition[1],
            scale: 1,
          }}
          className="pointer-events-none absolute z-[65]"
        >
          <FiUser size={45} />
        </motion.div>
      )}
      {isPlayerInitialized && (
        <AnimatePresence>
          <motion.div
            key={`${itemPosition[0]}, ${itemPosition[1]}`}
            className="pointer-events-none absolute z-[60] text-amber-500"
            initial={{
              rotate: -15,
              left: itemPosition[0],
              top: itemPosition[1],
              scale: 0.75,
            }}
            animate={{
              rotate: 15,
              left: itemPosition[0],
              top: itemPosition[1] - 10,
              scale: 1,
              transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
            }}
          >
            <FiStar size={30} />
          </motion.div>
        </AnimatePresence>
      )}
      <div className="relative z-10 my-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          {isPlayerInitialized ? (
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={DEFAULT_SPRING_TRANSITION}
              key="score"
              className="flex font-sans text-6xl font-semibold"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  className="ml-1"
                  key={score}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                >
                  {score}
                </motion.div>
              </AnimatePresence>
            </motion.h1>
          ) : (
            <motion.h1
              exit={{ opacity: 0, y: 10 }}
              key="name"
              className="font-sans text-6xl font-semibold"
              transition={DEFAULT_SPRING_TRANSITION}
            >
              stephen sparling
            </motion.h1>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {isPlayerInitialized ? (
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              key="instructions"
              className="mt-8 flex"
              transition={DEFAULT_SPRING_TRANSITION}
            >
              WASD to move. high score: {highScore}
            </motion.h2>
          ) : (
            <motion.h2
              key="subtitle"
              exit={{ opacity: 0, y: 10 }}
              transition={DEFAULT_SPRING_TRANSITION}
              className="mt-8 flex"
            >
              web developer |
              <button onClick={startGame} className="ml-1 underline">
                making cool stuff
              </button>
            </motion.h2>
          )}
        </AnimatePresence>
        <div className="relative mt-12 flex flex-col sm:flex-row">
          <LinkButton
            Icon={FiUser}
            showIcon={!isPlayerInitialized}
            href="/about"
            label="who I am"
            className="mb-6 sm:mr-24 sm:mb-0"
            backgroundIcon="user"
            iconRef={playerRef}
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
