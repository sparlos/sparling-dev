import { MotionProps } from 'framer-motion'
import { DEFAULT_SPRING_TRANSITION } from '../framer'

export const headingAnimation: MotionProps = {
  initial: {
    x: -25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  transition: DEFAULT_SPRING_TRANSITION,
}

export const toggleAnimation: MotionProps = {
  initial: {
    x: -25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: { ...DEFAULT_SPRING_TRANSITION, delay: 0.05 },
}
