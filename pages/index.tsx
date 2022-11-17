import type { NextPage } from 'next'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiCode, FiSend } from 'react-icons/fi'
import useHomeScreenGame from '../hooks/useHomeScreenGame'
import HomeGame from '../components/HomeGame'
import IconBackground from '../components/IconBackground'
import {
  controlsAnimation,
  headingNameAnimation,
  scoreContainerAnimation,
  scoreNumberAnimation,
  subtitleAnimation,
} from '../utils/animations/rootRoute'
import { useEffect } from 'react'
import useUIStore from '../store/uiStore'

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
    endGame,
    joystickAreaRef,
  } = useHomeScreenGame()
  const { setBackgroundIcon } = useUIStore()

  useEffect(() => {
    return () => setBackgroundIcon(null)
  }, [setBackgroundIcon])

  return (
    <div
      ref={playAreaRef}
      style={{ userSelect: isGameInitialized ? 'none' : 'auto' }}
      className="relative flex h-full flex-col items-center overflow-auto text-center dark:text-white"
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
        onQuitGame={endGame}
      />
      <div className="relative z-10 mt-8 flex flex-col items-center py-24 sm:my-auto sm:mt-auto">
        <AnimatePresence initial={false} mode="wait">
          {isPlayerInitialized ? (
            <motion.h1
              {...scoreContainerAnimation}
              key="score"
              className="flex font-sans text-4xl font-semibold sm:text-6xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  className="ml-1"
                  {...scoreNumberAnimation}
                  key={score}
                >
                  {score}
                </motion.div>
              </AnimatePresence>
            </motion.h1>
          ) : (
            <motion.h1
              {...headingNameAnimation}
              key="name"
              className="font-sans text-4xl font-semibold sm:text-6xl"
            >
              stephen sparling
            </motion.h1>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false} mode="wait">
          {isPlayerInitialized ? (
            <motion.h2
              {...controlsAnimation}
              key="instructions"
              className="mt-8 flex"
            >
              WASD to move. high score: {highScore}
            </motion.h2>
          ) : (
            <motion.h2
              key="subtitle"
              {...subtitleAnimation}
              className="mt-4 flex text-sm sm:mt-8 sm:text-base"
            >
              web developer |
              <button onClick={startGame} className="ml-1 underline">
                making cool stuff
              </button>
            </motion.h2>
          )}
        </AnimatePresence>
        <div className="relative mt-8 flex flex-col sm:mt-12 sm:flex-row">
          <LinkButton
            Icon={FiUser}
            showIcon={!isPlayerInitialized}
            href="/about"
            label="who I am"
            className="mb-4 sm:mr-24 sm:mb-0"
            backgroundIcon="user"
            iconRef={playerRef}
          />
          <LinkButton
            Icon={FiCode}
            href="/projects-and-skills"
            label="what I do"
            className="mb-4 sm:mr-24 sm:mb-0"
            bgColor="bg-red-500"
            backgroundIcon="code"
          />
          <LinkButton
            Icon={FiSend}
            href="/contact"
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
