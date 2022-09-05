import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import {
  DEFAULT_SLIDE_RIGHT_PROPS,
  DEFAULT_SPRING_TRANSITION,
} from '../utils/framer'

type BigToggleProps = {
  toggleLeftText: string
  toggleRightText: string
}

export default function BigToggle({
  toggleLeftText,
  toggleRightText,
}: BigToggleProps) {
  const [toggleState, setToggleState] = useState<null | 'left' | 'right'>(null)
  const [hoveredState, setHoveredState] = useState<null | 'left' | 'right'>(
    null
  )
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme !== 'system' ? theme : systemTheme

  const BUTTON_CLASS = 'relative border-y border-solid flex-1  '

  return (
    <div className="relative flex h-14">
      <motion.button
        className={BUTTON_CLASS + '-mr-4 overflow-hidden rounded-l-lg border-l'}
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
      <div className="z-10 -mt-1 h-[115%] w-px rotate-[30deg] bg-gray-200 dark:bg-white" />
      <motion.button
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
    </div>
  )
}
