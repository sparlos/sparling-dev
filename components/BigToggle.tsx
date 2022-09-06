import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  getButtonBackgroundAnimation,
  getDividerAnimation,
  getLeftButtonAnimation,
  getRightButtonAnimation,
  getToggleContainerAnimation,
} from '../utils/animations/bigToggle'

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
  const [hoveredState, setHoveredState] = useState<BigToggleState>(null)

  const BUTTON_CLASS = 'relative border-y border-solid flex-1  '
  const isSmall = shrinkOnSelect && toggleState

  return (
    <motion.div
      {...getToggleContainerAnimation(!!isSmall)}
      className="relative flex"
    >
      <motion.button
        {...getLeftButtonAnimation(!!isSmall)}
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
          {...getButtonBackgroundAnimation(
            toggleState === 'left',
            hoveredState === 'left'
          )}
          style={{ transformOrigin: '100% 0' }}
          className="absolute inset-0 z-[1] h-full -skew-x-[30deg] rounded-l-lg bg-gradient-to-r from-violet-800 to-pink-500"
        />
      </motion.button>
      <motion.div
        {...getDividerAnimation(!!isSmall)}
        className="z-10 h-[115%] w-px rotate-[30deg] bg-gray-200 dark:bg-white"
      />
      <motion.button
        {...getRightButtonAnimation(!!isSmall)}
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
          {...getButtonBackgroundAnimation(
            toggleState === 'right',
            hoveredState === 'right'
          )}
          style={{ transformOrigin: '0 100%' }}
          className="absolute inset-0 z-[1] h-full -skew-x-[30deg] bg-gradient-to-r from-cyan-600 to-teal-400"
        />
      </motion.button>
    </motion.div>
  )
}
