import { DEFAULT_SPRING_TRANSITION } from '../framer'

export const getToggleContainerAnimation = (isSmall: boolean) => ({
  initial: { height: '3.5rem' },
  animate: {
    height: isSmall ? '2.5rem' : '3.5rem',
    width: isSmall ? '34rem' : 'auto',
  },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getLeftButtonAnimation = (isSmall: Boolean) => ({
  initial: { marginRight: '-1rem' },
  animate: { marginRight: isSmall ? '-0.75rem' : '-1rem' },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getDividerAnimation = (isSmall: boolean) => ({
  initial: { marginTop: '-0.25rem' },
  animate: { marginTop: isSmall ? '-0.2rem' : '-0.25rem' },
  transition: DEFAULT_SPRING_TRANSITION,
})

export const getRightButtonAnimation = (isSmall: boolean) => ({
  initial: { marginLeft: '-1rem' },
  animate: { marginLeft: isSmall ? '-0.75rem' : '-1rem' },
  transition: DEFAULT_SPRING_TRANSITION,
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
