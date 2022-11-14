import { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiUser } from 'react-icons/fi'

type HomeGameProps = {
  isGameInitialized: boolean
  joystickAreaRef: React.MutableRefObject<HTMLDivElement>
  isPlayerInitialized: boolean
  playerPosition: [number, number]
  itemPosition: [number, number]
  onQuitGame: () => void
}

export default function HomeGame({
  isGameInitialized,
  joystickAreaRef,
  isPlayerInitialized,
  playerPosition,
  itemPosition,
  onQuitGame,
}: HomeGameProps) {
  return (
    <Fragment>
      <AnimatePresence>
        {isPlayerInitialized && (
          <motion.button
            key="exit-button"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-[22.5rem] top-8 w-48 rounded p-3 shadow-md dark:bg-slate-700"
            onClick={() => onQuitGame()}
          >
            Quit Game
          </motion.button>
        )}
      </AnimatePresence>
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
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={isGameInitialized ? { opacity: 1 } : {}}
        className="pointer-events-none fixed top-0 left-0 z-30 h-full w-full"
      >
        <div
          ref={joystickAreaRef}
          style={{ pointerEvents: isGameInitialized ? 'auto' : 'none' }}
          className="absolute bottom-0 left-0 flex h-48 w-full items-center justify-center border-2 border-dashed border-slate-400 bg-opacity-100"
        >
          <span className="rounded-md bg-slate-400 p-4 text-white">
            VIRTUAL JOYSTICK AREA
          </span>
        </div>
      </motion.div>
    </Fragment>
  )
}
