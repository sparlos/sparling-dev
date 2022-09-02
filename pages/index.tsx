import type { NextPage } from 'next'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiCode, FiSend, FiStar } from 'react-icons/fi'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'
import useHomeScreenGame from '../hooks/useHomeScreenGame'
import HomeGame from '../components/HomeGame'
import IconBackground from '../components/IconBackground'

const Home: NextPage = () => {
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
      style={{ userSelect: isGameInitialized ? 'none' : 'auto' }}
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
      <HomeGame
        isGameInitialized={isGameInitialized}
        joystickAreaRef={joystickAreaRef}
        isPlayerInitialized={isPlayerInitialized}
        playerPosition={playerPosition}
        itemPosition={itemPosition}
      />
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
      <IconBackground />
    </div>
  )
}

export default Home
