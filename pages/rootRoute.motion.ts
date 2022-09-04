import { MotionProps } from 'framer-motion'
import { DEFAULT_SPRING_TRANSITION } from '../utils/framer'

export const scoreContainerAnimation: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { DEFAULT_SPRING_TRANSITION },
}

export const scoreNumberAnimation: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.15 },
}

export const headingNameAnimation: MotionProps = {
  exit: { opacity: 0, y: 10 },
}

export const controlsAnimation: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
}

export const subtitleAnimation: MotionProps = {
  exit: { opacity: 0, y: 10 },
}
