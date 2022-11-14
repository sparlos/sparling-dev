import { motion, MotionProps } from 'framer-motion'
import { BigToggleState } from '../BigToggle'

type BigToggleButtonProps = {
  buttonAnimation: MotionProps
  backgroundAnimation: MotionProps
  toggleState: BigToggleState
  setToggleState: (newState: BigToggleState) => void
  setHoveredState: (newState: BigToggleState) => void
  position: 'left' | 'right'
  text: string
}

export default function BigToggleButton({
  buttonAnimation,
  backgroundAnimation,
  toggleState,
  setToggleState,
  setHoveredState,
  position,
  text,
}: BigToggleButtonProps) {
  return (
    <motion.button
      {...buttonAnimation}
      className={
        position === 'left'
          ? 'relative flex-1 overflow-hidden rounded-l-lg border-y border-l border-solid'
          : 'relative -ml-4 flex-1 overflow-hidden rounded-r-lg border-y border-r border-solid'
      }
      onClick={() => toggleState !== position && setToggleState(position)}
      onHoverStart={() => setHoveredState(position)}
      onFocus={() => setHoveredState(position)}
      onBlur={() => setHoveredState(null)}
      onHoverEnd={() => setHoveredState(null)}
    >
      <div
        className={`relative z-[2] transition-colors duration-75 dark:text-white ${
          toggleState === position ? 'text-white ' : ''
        } ${position === 'left' ? '-ml-4' : 'ml-4'}`}
      >
        {text}
      </div>
      <motion.div
        {...backgroundAnimation}
        style={{ transformOrigin: position === 'left' ? '100% 0' : '0 100%' }}
        className={
          position === 'left'
            ? 'absolute inset-0 z-[1] h-full -skew-x-[30deg] rounded-l-lg bg-gradient-to-r from-violet-800 to-pink-500'
            : 'absolute inset-0 z-[1] h-full -skew-x-[30deg] bg-gradient-to-r from-cyan-600 to-teal-400'
        }
      />
    </motion.button>
  )
}
