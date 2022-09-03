import { MotionProps, Transition } from 'framer-motion'

export const DEFAULT_SPRING_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 150,
  damping: 20,
}

export const DEFAULT_SLIDE_DOWN_PROPS: MotionProps = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: DEFAULT_SPRING_TRANSITION,
}

export const DEFAULT_SLIDE_RIGHT_PROPS: MotionProps = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: DEFAULT_SPRING_TRANSITION,
}
