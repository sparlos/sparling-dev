import { MotionProps } from 'framer-motion'
import { DEFAULT_SPRING_TRANSITION } from '../framer'

export const scoreContainerAnimation: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { DEFAULT_SPRING_TRANSITION },
}

export const scoreNumberAnimation: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.15 },
}

export const headingNameAnimation: MotionProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -10 },
  exit: { opacity: 0, y: 10 },
  transition: DEFAULT_SPRING_TRANSITION,
}

export const controlsAnimation: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: DEFAULT_SPRING_TRANSITION,
}

export const subtitleAnimation: MotionProps = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -10 },
  exit: { opacity: 0, y: 10 },
  transition: DEFAULT_SPRING_TRANSITION,
}
