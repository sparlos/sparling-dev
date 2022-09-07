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

export const dropdownAnimation: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: { ...DEFAULT_SPRING_TRANSITION, delay: 0.05 },
}

export const dropdownLabelAnimation: MotionProps = {
  initial: {
    opacity: 0,
    y: -20,
    position: 'absolute',
  },
  animate: {
    opacity: 1,
    y: 0,
    position: 'initial',
  },
  exit: {
    opacity: 0,
    y: 20,
    position: 'absolute',
  },
  transition: DEFAULT_SPRING_TRANSITION,
}

export const projectListAnimation: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { ...DEFAULT_SPRING_TRANSITION, delay: 0.05 },
}

export const projectTileAnimation: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { duration: 0.2 },
}

export const skillsListAnimation: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { ...DEFAULT_SPRING_TRANSITION, delay: 0.05 },
}
