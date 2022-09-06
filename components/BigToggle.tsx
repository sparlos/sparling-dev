import { motion } from 'framer-motion'
import { useState } from 'react'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

export type BigToggleState = 'left' | 'right' | null

type BigToggleProps = {
  toggleState: BigToggleState
  shrinkOnSelect?: boolean
  setToggleState: (newState: BigToggleState) => void
  toggleLeftText: string
  toggleRightText: string
}

export default function BigToggle({
  toggleState,
  shrinkOnSelect = true,
  setToggleState,
  toggleLeftText,
  toggleRightText,
}: BigToggleProps) {
  const [hoveredState, setHoveredState] = useState<null | 'left' | 'right'>(
    null
  )

  const BUTTON_CLASS = 'relative border-y border-solid flex-1  '
  const isSmall = shrinkOnSelect && toggleState

  return (
    <motion.div
      initial={{ height: '3.5rem' }}
      animate={{
        height: isSmall ? '2.5rem' : '3.5rem',
        width: isSmall ? '34rem' : 'auto',
      }}
      transition={DEFAULT_SPRING_TRANSITION}
      className="relative flex"
    >
      <motion.button
        animate={{ marginRight: isSmall ? '-0.75rem' : '-1rem' }}
        transition={DEFAULT_SPRING_TRANSITION}
        initial={{ marginRight: '-1rem' }}
        className={BUTTON_CLASS + 'overflow-hidden rounded-l-lg border-l'}
        onClick={() => setToggleState('left')}
        onHoverStart={() => setHoveredState('left')}
        onFocus={() => setHoveredState('left')}
        onHoverEnd={() => setHoveredState(null)}
      >
        <div
          className={`relative z-[2] transition-colors duration-75 dark:text-white ${
            toggleState === 'left' ? 'text-white' : ''
          }`}
        >
          {toggleLeftText}
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width:
              toggleState === 'left'
                ? '100%'
                : hoveredState === 'left'
                ? '15%'
                : 0,
          }}
          transition={toggleState === 'left' ? DEFAULT_SPRING_TRANSITION : {}}
          style={{ transformOrigin: '100% 0' }}
          className="absolute inset-0 z-[1] h-full -skew-x-[30deg] rounded-l-lg bg-gradient-to-r from-violet-800 to-pink-500"
        />
      </motion.button>
      <motion.div
        transition={DEFAULT_SPRING_TRANSITION}
        initial={{ marginTop: '-0.25rem' }}
        animate={{ marginTop: isSmall ? '-0.2rem' : '-0.25rem' }}
        className="z-10 h-[115%] w-px rotate-[30deg] bg-gray-200 dark:bg-white"
      />
      <motion.button
        transition={DEFAULT_SPRING_TRANSITION}
        initial={{ marginLeft: '-1rem' }}
        animate={{ marginLeft: isSmall ? '-0.75rem' : '-1rem' }}
        className={BUTTON_CLASS + '-ml-4 overflow-hidden rounded-r-lg border-r'}
        onClick={() => setToggleState('right')}
        onFocus={() => setHoveredState('right')}
        onHoverStart={() => setHoveredState('right')}
        onHoverEnd={() => setHoveredState(null)}
      >
        <div
          className={`relative z-[2] transition-colors duration-75 dark:text-white ${
            toggleState === 'right' ? 'text-white' : ''
          }`}
        >
          {toggleRightText}
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width:
              toggleState === 'right'
                ? '100%'
                : hoveredState === 'right'
                ? '12%'
                : 0,
          }}
          transition={toggleState === 'right' ? DEFAULT_SPRING_TRANSITION : {}}
          style={{ transformOrigin: '0 100%' }}
          className="absolute inset-0 z-[1] h-full -skew-x-[30deg] bg-gradient-to-r from-cyan-600 to-teal-400"
        />
      </motion.button>
    </motion.div>
  )
}
