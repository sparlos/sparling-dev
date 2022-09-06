import { Transition } from 'framer-motion'
import { DEFAULT_SPRING_TRANSITION } from '../framer'

const defaultTransition: Transition = {
  duration: 0.15,
}

export const getToggleContainerAnimation = (isSmall: boolean) => ({
  initial: { height: '3.5rem' },
  animate: {
    height: isSmall ? '2.5rem' : '3.5rem',
    width: isSmall ? '34rem' : 'auto',
  },
  transition: defaultTransition,
})

export const getLeftButtonAnimation = (isSmall: Boolean) => ({
  initial: { marginRight: '-1rem' },
  animate: { marginRight: isSmall ? '-0.75rem' : '-1rem' },
  transition: defaultTransition,
})

export const getDividerAnimation = (isSmall: boolean) => ({
  transition: DEFAULT_SPRING_TRANSITION,
  initial: { marginTop: '-0.25rem' },
  animate: { marginTop: isSmall ? '-0.2rem' : '-0.25rem' },
})

export const getRightButtonAnimation = (isSmall: boolean) => ({
  transition: DEFAULT_SPRING_TRANSITION,
  initial: { marginLeft: '-1rem' },
  animate: { marginLeft: isSmall ? '-0.75rem' : '-1rem' },
})

export const getButtonBackgroundAnimation = (
  active: boolean,
  hovered: boolean
) => ({
  initial: { width: 0 },
  animate: {
    width: active ? '100%' : hovered ? '15%' : 0,
  },
  transition: active ? DEFAULT_SPRING_TRANSITION : {},
})
