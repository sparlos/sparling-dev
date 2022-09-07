import { DEFAULT_SPRING_TRANSITION } from '../framer'

export const getToggleContainerAnimation = (
  isSmall: boolean,
  isPreToggled: boolean
) => ({
  initial: isPreToggled
    ? { height: '2.5rem', width: '34rem' }
    : { height: '3.5rem', width: 'auto' },
  animate: {
    height: isSmall ? '2.5rem' : '3.5rem',
    width: isSmall ? '34rem' : 'auto',
  },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getLeftButtonAnimation = (
  isSmall: boolean,
  isPreToggled: boolean
) => ({
  initial: { marginRight: isPreToggled ? '-0.75rem' : '-1rem' },
  animate: { marginRight: isSmall ? '-0.75rem' : '-1rem' },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getDividerAnimation = (
  isSmall: boolean,
  isPreToggled: boolean
) => ({
  initial: { marginTop: isPreToggled ? '-0.2rem' : '-0.25rem' },
  animate: { marginTop: isSmall ? '-0.2rem' : '-0.25rem' },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getRightButtonAnimation = (
  isSmall: boolean,
  isPreToggled: boolean
) => ({
  initial: { marginLeft: isPreToggled ? '-0.75rem' : '-1rem' },
  animate: { marginLeft: isSmall ? '-0.75rem' : '-1rem' },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getButtonBackgroundAnimation = (
  active: boolean,
  hovered: boolean,
  isPreToggled: boolean
) => ({
  initial: { width: isPreToggled && active ? '100%' : 0 },
  animate: {
    width: active ? '100%' : hovered ? '15%' : 0,
  },
  transition: active ? DEFAULT_SPRING_TRANSITION : {},
})
