import { MotionProps } from 'framer-motion'
import { DEFAULT_SPRING_TRANSITION } from '../framer'

export const getTextSlideLeftAnimation = (delay = 0): MotionProps => ({
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
  transition: { ...DEFAULT_SPRING_TRANSITION, delay },
})

export const getImageSlideDownAnimation = (delay = 0): MotionProps => ({
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  transition: { ...DEFAULT_SPRING_TRANSITION, delay },
})
